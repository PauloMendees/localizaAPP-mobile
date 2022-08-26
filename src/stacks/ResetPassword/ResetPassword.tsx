import React, { useCallback, useState, useEffect } from 'react'
import { HandleUserForm } from '../../components/HandleUserForm/HandleUserForm'

type AuthProps = {
    navigation: any
}

const ResetPassword = ({ navigation }: AuthProps) => {
    return <HandleUserForm navigation={navigation} label="Esqueci minha senha" />
}

export { ResetPassword }