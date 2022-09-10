import { StyleSheet } from "react-native";
import { colors } from "../../../../../theme/colors";

export const Style = StyleSheet.create({
    touchableContainer: {
        borderRadius: 10
    },

    container: {
        width: '100%',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        height: 60
    },

    smallColumn: {
        width: 130,
        fontWeight: '500',
        color: colors.light.darkGrey,
        fontSize: 12
    },

    mediumColumn: {
        width: 150,
        fontWeight: '500',
        color: colors.light.darkGrey,
        fontSize: 12
    },

    largeColumn: {
        width: 180,
        fontWeight: '500',
        color: colors.light.darkGrey,
        fontSize: 12
    }
})