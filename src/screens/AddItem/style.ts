import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const Style = StyleSheet.create({
    retangle: {
        width: 35,
        height: 20,
        backgroundColor: colors.light.cian,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginRight: 10
    },

    paddingView: {
        paddingHorizontal: 25
    }
})