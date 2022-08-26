import React from 'react'
import { Text, View } from 'react-native'
import { InputWithIcon } from '../../shared/TextInput/InputWithIcon'
import { Style } from './style'

type ThirdStepProps = {
    password: string
    setPassword: React.Dispatch<React.SetStateAction<string>>
    confirmPassword: string
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
    error: string
}

const ThirdStep = (props: ThirdStepProps) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(true)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(true)

    return (
        <View style={Style.container}>
            <InputWithIcon
                placeholder='Senha'
                iconName={showPassword ? 'eye-slash' : 'eye'}
                setShowEntry={setShowPassword}
                showEntry={showPassword}
                value={props.password}
                setValue={props.setPassword}
                error={!!props.error}
            />
            <InputWithIcon
                placeholder='Confirme sua senha'
                iconName={showConfirmPassword ? 'eye-slash' : 'eye'}
                setShowEntry={setShowConfirmPassword}
                showEntry={showConfirmPassword}
                value={props.confirmPassword}
                setValue={props.setConfirmPassword}
                error={!!props.error}
            />
            {!!props.error ? (
                <Text style={Style.textError}>{props.error}</Text>
            ) : (
                <Text style={Style.text}>Nós enviamos um código de seis dígitos para você!</Text>
            )}
        </View>
    )
}

export { ThirdStep }