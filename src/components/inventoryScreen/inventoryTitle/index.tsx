import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { IconButton, Text, View, Icon } from "native-base";
import { Style } from "./style";
import { colors } from "../../../theme/colors";
import { Divider } from "../../shared/Divider";
import useAsyncStorage from "../../../hooks/asyncStorage/useAsyncStorage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IconLogo } from "../../shared/IconLogo";
import { LogoutHeader } from "../../shared/LogoutHeader";

type Props = {
  nav: NativeStackNavigationProp<any>;
};

export function InventoryTitle({ nav }: Props) {
  const { storeData } = useAsyncStorage();

  return (
    <View style={Style.container}>
      <LogoutHeader nav={nav} />
      <View style={Style.resumeContainer}>
        <View style={Style.iconContainer}>
          <Icon as={FontAwesome} name="shopping-cart" size={30} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{ fontWeight: "900", color: colors.light.darkGrey }}
          >{`Itens cadastrados`}</Text>
          <Text
            style={{ fontSize: 12, color: colors.light.darkGrey }}
          >{`20`}</Text>
        </View>
      </View>
    </View>
  );
}
