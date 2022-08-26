import { FontAwesome } from "@expo/vector-icons";
import { Icon, Input } from "native-base";

type Props = {
  value?: string;
  handleValue?: (newText: string) => void;
  placeholder?: string;
  mb?: number;
  mt?: number;
};

export function EmailInput({ handleValue, value, mb, mt, placeholder }: Props) {
  return (
    <Input
      defaultValue={value}
      onChangeText={
        handleValue
          ? (newText) => handleValue(newText)
          : () => {
              /* do nothing */
            }
      }
      marginBottom={mb}
      marginTop={mt}
      variant="rounded"
      placeholder={placeholder ? placeholder : "Email"}
      isFullWidth
      size="md"
      InputLeftElement={<Icon as={FontAwesome} name="user" ml={4} />}
    />
  );
}
