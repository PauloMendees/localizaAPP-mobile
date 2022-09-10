import { FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon, IconButton, Text, View } from "native-base";
import useAsyncStorage from "../../../hooks/asyncStorage/useAsyncStorage";
import { colors } from "../../../theme/colors";
import { Divider } from "../Divider";
import { IconLogo } from "../IconLogo";
import { Style } from "./style";

type Props = {
    nav: NativeStackNavigationProp<any>;
  };

export function LogoutHeader({nav}: Props) {
  const { storeData } = useAsyncStorage();

  return (
    <>
      <View style={Style.menuContainer}>
        <View style={Style.menuContent}>
          <IconLogo />
          <Text style={Style.empresaNameText}>{`Localiza Software`}</Text>
        </View>
        <IconButton
          onPress={async () => {
            await storeData("navigationToken", "");
            nav.navigate("Login");
          }}
          icon={
            <Icon
              as={FontAwesome}
              name="sign-out"
              color={colors.light.darkGrey}
              size={18}
            />
          }
        />
      </View>
      <Divider />
    </>
  );
}
