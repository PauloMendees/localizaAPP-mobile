import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const Style = StyleSheet.create({
    menuContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menuContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    empresaNameText: {
        marginLeft: 10,
        fontSize: 12
    }
})