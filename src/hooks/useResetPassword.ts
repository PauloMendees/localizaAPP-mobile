import { AxiosResponse } from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import api from '../infraestructure/handleAPI'
import { CodeVerifyObject, ResetPasswordObject } from './types/useResetPasswordTypes'

/**
 * 
 * @param path API path
 * @returns object with data, is a hook
 */
export const useResetPassword = () => {
    const [fetchingResetPassword, setFetchingResetPassword] = useState<boolean>(false)
    const [errorResetPassword, setErrorResetPassword] = useState<string>('')

    function clearStateReset() {
        setErrorResetPassword('')
        setFetchingResetPassword(false)
    }

    async function codeVerifyReset(body: CodeVerifyObject, setStep: Dispatch<SetStateAction<any>>){
        setFetchingResetPassword(true)
        await api.post('/user/verifyResetCode', body)
                .then((res: AxiosResponse) => {
                    setFetchingResetPassword(false)
                    api.defaults.headers.common['Authorization'] = `Bearer ${res.data.message}`
                    api.defaults.headers['Authorization'] = `Bearer ${res.data.message}`
                    setStep(2)
                    clearStateReset()
                })
                .catch((e) => {
                    setErrorResetPassword(e.response.data.message)
                    setFetchingResetPassword(false)
                })
    }

    async function resetPassword(body: ResetPasswordObject, setStep: Dispatch<SetStateAction<any>>){
        setFetchingResetPassword(true)
        await api.put('/user/changePassword', body)
                .then((res: AxiosResponse) => {
                    setFetchingResetPassword(false)
                    setStep(3)
                    clearStateReset()
                })
                .catch((e) => {
                    setErrorResetPassword(e.response.data.message)
                    setFetchingResetPassword(false)
                })
    }

    return { fetchingResetPassword, errorResetPassword, clearStateReset, codeVerifyReset, resetPassword }
}