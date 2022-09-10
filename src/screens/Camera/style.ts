import {StyleSheet} from 'react-native'
import { colors } from '../../theme/colors';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      position: 'relative',
      flexDirection: 'row'
    },
    takeAPictureButton: {
      alignSelf: 'flex-end',
      alignItems: 'center',
      bottom: 64,
      width: windowWidth/6,
      height: windowWidth/6,
      backgroundColor: colors.light.white,
      borderRadius: 99,
      left: '20%'
    },
    buttonFlip:{
      position: 'absolute',
      alignSelf: 'flex-end',
      alignItems: 'center',
      right: 50,
      bottom: 64
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });