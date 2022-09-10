import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "native-base";
import { ScreenProps } from "../../navigation/stack/types";
import { Style } from "./style";
import { AddItemForm } from "../../components/AddItemScreen/Form";
import { TitleAddItem } from "../../components/AddItemScreen/Title";

export default function AddItem({ navigation }: ScreenProps) {
  return (
    <SafeAreaView>
      <ScrollView>
        <TitleAddItem nav={navigation} />
        <View style={Style.paddingView}>
          <AddItemForm nav={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
