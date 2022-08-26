import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import { theme } from '../../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';

type PropTypes = {
    placeholder: string
    iconName: string
    showEntry: boolean
    setShowEntry: React.Dispatch<React.SetStateAction<any>>
    value: string
    setValue: React.Dispatch<React.SetStateAction<any>>
    error?: boolean
}

export const InputWithIcon = (props: PropTypes) => {
    const [focused, setFocused] = React.useState<boolean>(false)

    return (
        <View style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'row',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: `${focused ? props.error ? theme.pallete.error.main : theme.pallete.primary.main : props.error ? theme.pallete.error.main : theme.pallete.black.main}`,
            borderRadius: 15,
            alignItems: 'center',
            height: 48,
            justifyContent: 'space-between',
            paddingLeft: 12,
            paddingRight: 22,
            marginTop: 15
        }}>
            <TextInput
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                placeholder={props.placeholder}
                style={{ width: '90%' }}
                secureTextEntry={props.showEntry}
                defaultValue={props.value}
                onChangeText={newText => props.setValue(newText)}
            />
            <Icon.Button
                name={props.iconName}
                color={focused ? theme.pallete.primary.main : theme.pallete.black.main}
                backgroundColor="transparent"
                style={{ paddingLeft: 15 }}
                onPress={() => {props.setShowEntry(!props.showEntry)}}
                underlayColor="transparent"
            />
        </View>
    )
}