import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light.gray
    },
    input: {
        marginBottom: 10
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        opacity: 0.7,
        paddingLeft: 4,
        height: 50
    },
    text: {
        color: colors.light.darkGrey,
    },
    divider:{
        width: 100,
        height: 1,
        backgroundColor: colors.light.darkGrey,
        marginVertical: 20,
        opacity: 0.7
    },
    textButton: {
        color: colors.light.white,
        fontWeight: '500'
    },
    textButtonOutlined: {
        color: colors.light.cian,
        fontWeight: '500'
    },
    outlinedButton: {
        borderColor: colors.light.cian
    }
})