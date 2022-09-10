import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const Style = StyleSheet.create({
    formContainer: {
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 25,
        backgroundColor: colors.light.white,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        position: 'relative',
      },

      outlinedButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.light.cian
      },

      textFoto: {
        width: '100%',
        textAlign: 'center'
      },

      cameraButtonContainer: {
        backgroundColor: colors.light.cian,
        height: '100%',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 100
      }
})