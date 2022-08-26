import React, { Dispatch, SetStateAction, useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from '../../shared/TextInput/TextInput';
import { Style } from './style';

type SecondStepProps = {
    code: string,
    setCode: Dispatch<SetStateAction<any>>
    error: string
}

const SecondStep = (props: SecondStepProps) => {
    const [focused, setFocused] = useState<boolean>(false)

    return (
        <View style={Style.container}>
            <TextInput
                placeholder='Código de seis dígitos'
                focused={focused}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                defaultValue={props.code}
                onChangeText={newText => props.setCode(newText)}
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

export { SecondStep }