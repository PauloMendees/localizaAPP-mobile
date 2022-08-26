import { Input } from "native-base";

type Props = {
  codeValue: string
  handleCode: (newCode: string) => void
}

export function StepTwo({codeValue, handleCode}: Props) {
  return (
    <Input
      defaultValue={codeValue}
      onChangeText={handleCode}
      marginBottom={4}
      variant="rounded"
      placeholder="Código enviado para o email"
      isFullWidth
      size="md"
    />
  );
}
