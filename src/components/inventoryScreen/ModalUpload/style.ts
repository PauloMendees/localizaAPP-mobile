import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const Style = StyleSheet.create({
    footerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    cancelButton: {
        backgroundColor: 'transparent',
        borderColor: colors.light.cian
    },
})