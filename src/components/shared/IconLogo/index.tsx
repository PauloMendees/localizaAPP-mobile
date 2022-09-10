import { Image } from "react-native"


export function IconLogo(){
    return(
        <Image style={{
            width: 30,
            height: 30,
            marginTop: 3
        }} source={require('../../../assets/images/logo_colorido.png')} />
    )
}