import { FontAwesome } from "@expo/vector-icons";
import { Icon, Text, View } from "native-base";
import { TouchableHighlight } from "react-native";
import { useSheet } from "../../../../../context/ActionSheetContext";
import { colors } from "../../../../../theme/colors";
import useTableCell from "./hooks/useTableCell";
import { Style } from "./style";

export function TableCell() {
  const { openActionSheet } = useTableCell();
  return (
    <TouchableHighlight
      style={Style.touchableContainer}
      underlayColor={colors.light.lowOpacityCian}
      onPress={() => {
        openActionSheet("Liquidificador");
      }}
    >
      <View style={Style.container}>
        <Text style={Style.mediumColumn}>{`Liquidificador`}</Text>
        <Text style={Style.largeColumn}>{`1111-4444-5555-6666`}</Text>
        <Text style={Style.mediumColumn}>{`123456`}</Text>
        <Text style={Style.smallColumn}>{`2`}</Text>
        <Text style={Style.smallColumn}>{`Sim`}</Text>
        <Text style={Style.largeColumn}>{`Trindade, Goiás`}</Text>
        <Text style={Style.largeColumn}>{`22/05/2002`}</Text>
      </View>
    </TouchableHighlight>
  );
}
