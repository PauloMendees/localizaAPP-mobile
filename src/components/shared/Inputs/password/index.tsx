import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Icon, Input, Pressable } from "native-base";
import usePasswordInput from "./hooks/usePasswordInput";

type Props = {
  placeholder?: string;
  mb?: number;
  mt?: number;
  value?: string;
  handleValue?: (newText: string) => void;
};

export function PasswordInput({ placeholder, mb, mt, handleValue, value }: Props) {
  const { handleShowPassword, showPassword } = usePasswordInput();

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
      placeholder={placeholder}
      isFullWidth
      size="md"
      InputLeftElement={<Icon as={FontAwesome} name="lock" ml={4} />}
      type={showPassword ? "text" : "password"}
      InputRightElement={
        <Pressable onPress={handleShowPassword}>
          <Icon
            as={
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
              />
            }
            size={5}
            mr="4"
            color="muted.400"
          />
        </Pressable>
      }
    />
  );
}
