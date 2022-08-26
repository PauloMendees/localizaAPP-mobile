import { Text, View } from "react-native"
import CheckBox from '@react-native-community/checkbox';
import { Style } from "./Style";
import { theme } from "../../../theme";
import React from 'react';


type CheckBoxProps = {
    showPassword: boolean
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
    label: string
}

const CheckboxComponent = (props: CheckBoxProps) => {
    return (
        <View style={Style.checkBoxContainer}>
            <CheckBox
                disabled={false}
                value={props.showPassword}
                onValueChange={(newValue) => props.setShowPassword(newValue)}
                tintColors={{
                    true: theme.pallete.primary.main,
                }}
                style={{
                    marginLeft: -6
                }}
            />
            <Text style={Style.checkBoxLabel}>{props.label}</Text>
        </View>
    )
}

export { CheckboxComponent }