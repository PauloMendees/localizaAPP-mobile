import { ScrollView } from "native-base";
import { TableCell } from "./cell";
import { Header } from "./header";

export function Table(){
    return(
        <ScrollView horizontal={true} contentContainerStyle={{display: 'flex', flexDirection: 'column'}}>
            <Header />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
        </ScrollView>
    )
}