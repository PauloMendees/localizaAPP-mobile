import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const Style = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 25,
    paddingVertical: 25,
    backgroundColor: colors.light.white,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
    position: 'relative',
    alignItems: 'center'
  },

  titleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 25
  },

  titleText: {
    fontWeight: '800',
    fontSize: 18
  },

  uploadButton: {
    backgroundColor: 'transparent',
    borderColor: colors.light.cian
  }
});
