import { FontAwesome } from "@expo/vector-icons";
import { Icon, IconButton, Text, View } from "native-base";
import { Style } from "./style";

type Props = {
  onNext: () => void;
  onPrevious: () => void;
};

export function Pagination() {
  return (
    <View style={Style.container}>
      <IconButton icon={<Icon as={FontAwesome} name="arrow-left" size={15} />} />
      <IconButton icon={<Icon as={FontAwesome} name="arrow-right" size={15} />} />
    </View>
  );
}
