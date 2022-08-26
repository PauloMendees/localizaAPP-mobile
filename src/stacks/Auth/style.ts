import { StyleSheet, Dimensions } from 'react-native'
import { theme } from '../../theme'

const Style = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.pallete.background.main
    },

    formAuxiliateView: {
        marginTop: 10,
        width: '78%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    text: {
        fontSize: 12,
        opacity: 0.8
    },

    buttonsContainer: {
        marginTop: 35,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    divider: {
        width: Dimensions.get('window').width/5,
        height: 1,
        backgroundColor: theme.pallete.black.main,
        marginTop: 15,
        marginBottom: 15,
        opacity: 0.4
    }
})

export { Style }