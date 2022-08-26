import { Image } from "react-native"
import * as React from 'react';
import { Style } from "./style";

const Logo = () => {
    return (
        <Image
            style={Style.container}
            source={require('../../assets/logo_nome_colorido_grande.png')}
        />
    )
}

export { Logo }