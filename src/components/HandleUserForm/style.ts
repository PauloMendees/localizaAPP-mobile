import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const Style = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textContainer: {
        marginTop: 20,
        width: '79%'
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.pallete.black.main
    }
})

export { Style }