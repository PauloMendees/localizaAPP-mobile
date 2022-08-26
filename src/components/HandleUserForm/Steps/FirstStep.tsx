import React, { Dispatch, SetStateAction, useState } from 'react';
import { Text } from 'react-native';
import { theme } from '../../../theme';
import { TextInput } from '../../shared/TextInput/TextInput';

type FirstStepProps = {
    email: string
    setEmail: Dispatch<SetStateAction<any>>
    emailError: boolean
    helperText: string
}

const FirstStep = (props: FirstStepProps) => {
    const [focused, setFocused] = useState<boolean>(false)

    return (
        <>
            <TextInput
                placeholder='Email'
                focused={focused}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                defaultValue={props.email}
                onChangeText={newText => props.setEmail(newText)}
                error={props.emailError}
            />
            {props.emailError ? (
                <Text style={{
                    color: theme.pallete.error.main,
                    fontSize: 12,
                    width: '80%',
                    marginTop: 10
                }}
                >
                    {props.helperText}
                </Text>) : (<></>)}
        </>
    )
}

export { FirstStep }