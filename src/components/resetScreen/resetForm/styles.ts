import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light.gray,
  },
  textButton: {
    color: colors.light.white
  },
  textButtonOutlined: {
    color: colors.light.cian
  },
  actionsView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  goBackButton: {
    backgroundColor: 'transparent'
  }
});
