import { Alert, CloseIcon, HStack, IconButton, Text, VStack } from "native-base";
import { useEffect } from "react";
import { colors } from "../../../theme/colors";
import { Style } from "./style";

type Props = {
    status: 'success' | 'error' | 'info' | 'warning' | ''
    color?: string
    message?: string
    onClose?: () => void
}

export function Snackbar(props: Props) {
  useEffect(() => {
    if(props.message && props.onClose){
      setTimeout(props.onClose, 4000)
    }
  }, [props.message])

  return (
    <Alert w="100%" status={props.status} style={Style.alertContainer}>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <Alert.Icon mt="1" />
            <Text fontSize="md" color={props.color ? props.color : colors.light.white}>
              {props.message}
            </Text>
          </HStack>
          <IconButton
            onPress={props.onClose}
            variant="unstyled"
            _focus={{
              borderWidth: 0,
            }}
            icon={<CloseIcon size="3" color="coolGray.600" />}
          />
        </HStack>
      </VStack>
    </Alert>
  );
}
