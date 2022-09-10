import { StyleSheet } from "react-native";
import { colors } from "../../../../theme/colors";

export const Style = StyleSheet.create({
    fileInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: colors.light.darkGrey,
        height: 80
    },
    textInput: {
        color: colors.light.darkGrey,
        fontSize: 12
    }
})