import { View } from "native-base";
import { colors } from "../../../theme/colors";

export function Divider(){
    return(
        <View style={{
            width: '100%',
            height: 1,
            borderRadius: 99,
            backgroundColor: colors.light.darkGrey,
            opacity: 0.3,
            marginVertical: 10
        }} />
    )
}