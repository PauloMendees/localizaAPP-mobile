import { Text, View } from "native-base";
import { Style } from "./style";

export function Header(){
    return(
        <View style={Style.container}>
            <Text style={Style.mediumColumn}>{`Produto`}</Text>
            <Text style={Style.largeColumn}>{`Sequencial`}</Text>
            <Text style={Style.mediumColumn}>{`Plaqueta`}</Text>
            <Text style={Style.smallColumn}>{`Andar`}</Text>
            <Text style={Style.smallColumn}>{`Lido`}</Text>
            <Text style={Style.largeColumn }>{`Localização`}</Text>
            <Text style={Style.largeColumn }>{`Data inclusão`}</Text>
        </View>
    )
}