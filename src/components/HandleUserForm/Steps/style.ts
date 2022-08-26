import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const Style = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        width: '78%',
        fontSize: 10,
        marginTop: 10
    },
    textError: {
        width: '78%',
        fontSize: 10,
        marginTop: 10,
        color: theme.pallete.error.main
    }
})

export { Style }