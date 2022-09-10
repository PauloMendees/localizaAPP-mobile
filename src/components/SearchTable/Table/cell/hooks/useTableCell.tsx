import { FontAwesome } from "@expo/vector-icons";
import { Icon } from "native-base";
import { useSheet } from "../../../../../context/ActionSheetContext";
import { colors } from "../../../../../theme/colors";

export default function useTableCell() {
  const { toggleSheet } = useSheet();

  function openActionSheet(itemName: string) {
    return toggleSheet(itemName, [
      {
        label: "Ir para detalhes",
        onPress: () => {},
        icon: (
          <Icon
            as={FontAwesome}
            name="long-arrow-right"
            color={colors.light.cian}
            size={5}
          />
        ),
      },
      {
        label: "Editar",
        onPress: () => {},
        icon: (
          <Icon
            as={FontAwesome}
            name="pencil"
            color={colors.light.cian}
            size={5}
          />
        ),
      },
      {
        label: "Excluir",
        onPress: () => {},
        icon: (
          <Icon
            as={FontAwesome}
            name="trash"
            color={colors.light.cian}
            size={5}
          />
        ),
      },
    ]);
  }

  return { openActionSheet };
}
