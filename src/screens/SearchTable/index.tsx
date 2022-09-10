import { ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Table } from "../../components/SearchTable/Table";
import { SearchTableTitle } from "../../components/SearchTable/Title";
import { ScreenProps } from "../../navigation/stack/types";
import { Style } from "./style";

export default function SearchTable({ navigation }: ScreenProps) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={Style.container}>
        <SearchTableTitle nav={navigation}/>
        <Table />
      </ScrollView>
    </SafeAreaView>
  );
}
