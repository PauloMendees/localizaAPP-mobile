import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "native-base";
import { LogoutHeader } from "../../shared/LogoutHeader";
import { Style } from "./style";

type Props = {
    nav: NativeStackNavigationProp<any>;
};

export function TitleAddItem({nav}: Props) {
  return (
    <View style={Style.titleContainer}>
      <LogoutHeader nav={nav} />
      <Text style={Style.titleText}>{`Adicionar item`}</Text>
    </View>
  );
}
