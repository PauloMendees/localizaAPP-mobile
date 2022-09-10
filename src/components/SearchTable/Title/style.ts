import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const Style = StyleSheet.create({
    titleContainer: {
        display: 'flex',
        width: '100%',
        backgroundColor: colors.light.white,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
    },
})