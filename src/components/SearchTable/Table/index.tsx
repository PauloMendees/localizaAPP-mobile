import { ScrollView, View } from "native-base";
import { Pagination } from "../../shared/Pagination";
import { TableCell } from "./cell";
import { Header } from "./header";
import { Style } from "./style";

export function Table() {
  return (
    <View style={{ paddingLeft: 20 }}>
      <View style={Style.container}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ display: "flex", flexDirection: "column" }}
        >
          <Header />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
        </ScrollView>
        <Pagination />
      </View>
    </View>
  );
}
