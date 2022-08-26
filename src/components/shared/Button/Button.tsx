import React, { useState } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { theme } from '../../../theme'
import { ButtonProps } from './type'

const Button = (props: ButtonProps) => {
    const [isPress, setIsPress] = useState(false)

    return (
        <TouchableHighlight
            style={{
                backgroundColor: props.color === 'primary' ? theme.pallete.primary.main : theme.pallete.secondary.main,
                width: props.width,
                height: props.height,
                marginTop: !!props.marginTop ? props.marginTop : 0,
                marginBottom: !!props.marginBottom ? props.marginBottom : 0,
                opacity: isPress ? 0.8 : 1,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}
            underlayColor={props.color === 'primary' ? theme.pallete.primary.main : theme.pallete.secondary.main}
            onPress={props.onPress}
            onPressIn={() => setIsPress(true)}
            onPressOut={() => setIsPress(false)}
        >
            <Text
                style={{
                    color: props.color === 'primary' ? theme.pallete.background.main : theme.pallete.black.main,
                    fontSize: props.textSize,
                    fontWeight: !!props.fontWeight ? props.fontWeight : 'bold'
                }}
            >
                { props.label }
            </Text>
        </TouchableHighlight>
    )
}

export { Button }