import React from 'react';
import { TouchableWithoutFeedback, Keyboard, Platform, Dimensions, KeyboardAvoidingView } from 'react-native'
import { style } from './style';

const ViewDismissKeyBoard = ({ children }: any) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={style.container}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} accessible={false}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export { ViewDismissKeyBoard }