import { FontAwesome } from "@expo/vector-icons";
import { Icon, View } from "native-base";
import { Platform } from "react-native";
import { colors } from "../../../theme/colors";
import { ButtonBase } from "../../shared/Buttons";
import { Style } from "../resetForm/styles";

type Props = {
  previousStep: () => void;
  nextStep: () => void;
  isLoading?: boolean;
};

export function ActionButtons({ nextStep, previousStep, isLoading }: Props) {
  return (
    <View style={Style.actionsView}>
      <ButtonBase
        startIcon={
          <Icon
            as={FontAwesome}
            name="long-arrow-left"
            color={colors.light.cian}
            nativeID={Platform.OS ? "ios-go-on" : "md-go-on"}
          />
        }
        label="Voltar"
        rounded="full"
        textStyle={Style.textButtonOutlined}
        style={Style.goBackButton}
        onPress={previousStep}
      />
      <ButtonBase
        isLoading={isLoading}
        rounded="full"
        endIcon={
          <Icon
            as={FontAwesome}
            name="long-arrow-right"
            color={colors.light.white}
            nativeID={Platform.OS ? "ios-go-on" : "md-go-on"}
            ml={4}
          />
        }
        label="Avançar"
        textStyle={Style.textButton}
        onPress={nextStep}
        style={{ minWidth: 100 }}
      />
    </View>
  );
}
