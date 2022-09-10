import { StyleSheet } from "react-native";
import { colors } from "../../../../../theme/colors";

export const Style = StyleSheet.create({
    container: {
        width: '100%',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: colors.light.lowOpacityCian,
        borderTopLeftRadius: 10,
        height: 60
    },

    smallColumn: {
        width: 130,
        fontWeight: '700',
        color: colors.light.darkGrey,
        opacity: 0.8,
        fontSize: 15
    },

    mediumColumn: {
        width: 150,
        fontWeight: '700',
        color: colors.light.darkGrey,
        opacity: 0.8,
        fontSize: 15
    },

    largeColumn: {
        width: 180,
        fontWeight: '700',
        color: colors.light.darkGrey,
        opacity: 0.8,
        fontSize: 15
    }
})