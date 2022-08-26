import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, BackHandler, Alert } from "react-native"
import { Logo } from '../../components/Logo/Logo'
import { Button } from '../../components/shared/Button/Button'
import { OutlinedButton } from '../../components/shared/Button/OutlinedButton'
import { ViewDismissKeyBoard } from '../../components/shared/ViewDismissKeyboard/ViewDismissKeyboard'
import { useCreateNewUser } from '../../hooks/useCreateNewUser'
import { useMail } from '../../hooks/useMail'
import { useResetPassword } from '../../hooks/useResetPassword'
import { isValidEmailFunction } from '../../infraestructure/isValidEmailFunction'
import { LoadingButton } from '../shared/LoadingButton/LoadingButton'
import { Confirmation } from './Steps/Confirmation'
import { FirstStep } from './Steps/FirstStep'
import { SecondStep } from './Steps/SecondStep'
import { ThirdStep } from './Steps/ThirdStep'
import { Style } from './style'

type AuthProps = {
    label: string
    navigation: any
}

const HandleUserForm = ({ navigation, label }: AuthProps) => {
    const [actualStep, setActualStep] = useState<number>(0)
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [code, setCode] = useState<string>('');

    const isForgot = label === "Esqueci minha senha"

    const { fetching, message, send, clearState } = useMail(isForgot ? '/user/initResetPassword' : '/user/startRegister')
    const { fetchingResetPassword, errorResetPassword, clearStateReset, codeVerifyReset, resetPassword } = useResetPassword()
    const { fetchingCreateUser, errorCreateUser, clearStateCreateUser, codeVerifyCreate, createPassword } = useCreateNewUser()

    const [emailError, setEmailError] = useState<boolean>(false)
    const [helperText, setHelperText] = useState<string>('')

    const componentByStep = [
        <FirstStep
            email={email}
            setEmail={setEmail}
            emailError={emailError}
            helperText={helperText}
        />,
        <SecondStep
            code={code}
            setCode={setCode}
            error={isForgot ? errorResetPassword : errorCreateUser}

        />,
        <ThirdStep
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            error={isForgot ? errorResetPassword : errorCreateUser}
        />,
        <Confirmation />
    ]

    useFocusEffect(
        useCallback(() => {
          const onBackPress = () => {
            if (actualStep !== 0) {
              setActualStep(actualStep-1)
              return true;
            } else {
              return false;
            }
          };
    
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [actualStep])
      );

      const handleSteps = async () => {
        if (actualStep === 0) {
            if (isValidEmailFunction(email)) {
               await send({ email: email.toString() }, setActualStep)
            } else {
                setEmailError(true)
                setHelperText('Email inválido')
            }
        } else if (actualStep === 1) {
            if(isForgot) { 
               codeVerifyReset({ email: email, code: code }, setActualStep)
            } else {
                codeVerifyCreate({ email: email, code: code }, setActualStep)
            }
        } else if (actualStep === 2) {
            if(isForgot){                
                resetPassword({
                    email: email,
                    new_password: password,
                    confirm_new_password: confirmPassword
                }, setActualStep)
            } else {
                createPassword({
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                }, setActualStep) 
            }
        } else if (actualStep === 3) {
            navigation.navigate('Auth')
        }
    }

    return (
        <ViewDismissKeyBoard>
            <View style={Style.container}>
                <Logo />
                <View style={Style.textContainer}>
                    <Text style={Style.text}>{label}</Text>
                </View>
                {componentByStep[actualStep]}
                {(actualStep !== 3 && !fetching && !fetchingCreateUser && !fetchingResetPassword) ? (
                    <Button
                        label="Avançar"
                        color='primary'
                        height={45}
                        textSize={15}
                        width='80%'
                        fontWeight='400'
                        marginTop={20}
                        onPress={() => {
                            handleSteps()
                        }}
                    />) : (<></>)}
                {(fetchingCreateUser || fetchingResetPassword || fetching) ? (<LoadingButton marginTop={15} width='80%' height={45} />) : (<></>) }
                <OutlinedButton
                    label={actualStep !== 3 ? "Voltar" : "Voltar para Login"}
                    height={45}
                    textSize={15}
                    width='80%'
                    fontWeight='400'
                    marginTop={10}
                    onPress={() => {
                        if(actualStep === 0 || actualStep === 3){
                            navigation.navigate("Auth")
                        } else {
                            setActualStep(actualStep-1)
                        }
                    }}
                />
            </View>
        </ViewDismissKeyBoard>
    )
}

export { HandleUserForm }