import { FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon, View } from "native-base";
import { BaseInput } from "../../shared/Inputs/base";
import { LogoutHeader } from "../../shared/LogoutHeader";
import { Style } from "./style";

type Props = {
    nav: NativeStackNavigationProp<any>;
};

export function SearchTableTitle({nav}: Props){
    return(
        <View style={Style.titleContainer}>
            <LogoutHeader nav={nav} />
            <BaseInput
                mt={4}
                size="xs"
                height={10}
                iconLeft={
                    <Icon as={FontAwesome} name="search" ml={4} />
                }
                placeholder="Buscar..."
            />
        </View>
    )
}