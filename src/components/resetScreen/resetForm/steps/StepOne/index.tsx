import { FontAwesome } from "@expo/vector-icons";
import { Icon, Input } from "native-base";

type Props = {
  emailValue: string
  handleEmail: (newEmail: string) => void
}

export function StepOne({emailValue, handleEmail}: Props) {
  return (
    <Input
      value={emailValue}
      onChangeText={handleEmail}
      marginBottom={4}
      variant="rounded"
      placeholder="Email"
      isFullWidth
      size="md"
      InputLeftElement={<Icon as={FontAwesome} name="user" ml={4} />}
    />
  );
}
