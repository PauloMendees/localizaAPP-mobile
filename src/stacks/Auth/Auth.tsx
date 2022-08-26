import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Logo } from '../../components/Logo/Logo';
import { Button } from '../../components/shared/Button/Button';
import { OutlinedButton } from '../../components/shared/Button/OutlinedButton';
import { CheckboxComponent } from '../../components/shared/CheckBox/CheckBox';
import { ViewDismissKeyBoard } from '../../components/shared/ViewDismissKeyboard/ViewDismissKeyboard';
import { TextInput } from '../../components/shared/TextInput/TextInput';
import { CentralizedView } from '../../components/shared/View/CentralizedView';
import { theme } from '../../theme'
import { Style } from './style';

type AuthProps = {
    navigation: any
}

const Auth = ({ navigation }: AuthProps) => {
    const [focusEmail, setFocusEmail] = React.useState<boolean>(false)
    const [focusPassword, setFocusPassword] = React.useState<boolean>(false)

    const [showPassword, setShowPassword] = React.useState<boolean>(false)

    return (
        <ViewDismissKeyBoard>
            <CentralizedView
                backgroundColor={theme.pallete.background.main}
                width={Dimensions.get('window').width}
                height={Dimensions.get('window').height + 100}
            >
                <Logo />
                <TextInput
                    placeholder='E-mail'
                    onBlur={() => setFocusEmail(false)}
                    onFocus={() => setFocusEmail(true)}
                    focused={focusEmail}
                />
                <TextInput
                    placeholder='Senha'
                    onBlur={() => setFocusPassword(false)}
                    onFocus={() => setFocusPassword(true)}
                    focused={focusPassword}
                    secureTextEntry={showPassword}
                />
                <View style={Style.formAuxiliateView}>
                    <CheckboxComponent
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        label='Mostrar senha'
                    />
                    <Text style={Style.text} onPress={() => { navigation.navigate('ResetPassword') }}>Esqueci minha senha</Text>
                </View>
                <View style={Style.buttonsContainer}>
                    <Button
                        label='Login'
                        color='primary'
                        height={45}
                        textSize={15}
                        width='80%'
                        fontWeight='400'
                    />
                    <View style={Style.divider} />
                    <OutlinedButton
                        color='primary'
                        height={45}
                        label='Registre-se'
                        textSize={15}
                        width='80%'
                        fontWeight='400'
                        onPress={() => {
                            navigation.navigate('RegisterUser')
                        }}
                    />
                </View>
            </CentralizedView>
        </ViewDismissKeyBoard>
    )
}

export { Auth }