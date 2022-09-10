import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const Style = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: colors.light.white,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        display: 'flex',
        flexDirection: 'column'
    },
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
    title: {
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 10,
        lineHeight: 25
    },
    resumeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    iconContainer: {
        marginTop: 15,
        backgroundColor: colors.light.lowOpacityCian,
        padding: 5,
        borderRadius: 5,
    },
    empresaNameText: {
        marginLeft: 10,
        fontSize: 12
    }
})