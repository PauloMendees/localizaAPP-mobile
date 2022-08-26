import { Text } from "native-base";
import { Style } from "./style";

export function Confirmation() {
  return <Text style={Style.text}>{`Operação realizada com sucesso.`}</Text>;
}
