
import { StyleSheet, Dimensions } from 'react-native'

const style =  StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export { style }