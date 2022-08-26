import React, { useCallback, useEffect, useState } from 'react'
import { Text } from 'react-native'
import { HandleUserForm } from '../../components/HandleUserForm/HandleUserForm'
import { ViewDismissKeyBoard } from '../../components/shared/ViewDismissKeyboard/ViewDismissKeyboard'

type RegisterProps = {
    navigation: any
}

export const RegisterUser = ({ navigation }: RegisterProps) => {

    return <HandleUserForm navigation={navigation} label="Novo usuário" />
}