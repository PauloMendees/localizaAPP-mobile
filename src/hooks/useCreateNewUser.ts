import { AxiosResponse } from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import api from '../infraestructure/handleAPI'
import { createUserType } from './types/useCreatePasswordTypes'
import { CodeVerifyObject } from './types/useResetPasswordTypes'

/**
 * 
 * @param path API path
 * @returns object with data, is a hook
 */
export const useCreateNewUser = () => {
    const [fetchingCreateUser, setFetchingCreateUser] = useState<boolean>(false)
    const [errorCreateUser, setErrorCreateUser] = useState<string>('')

    function clearStateCreateUser() {
        setErrorCreateUser('')
        setFetchingCreateUser(false)
    }

    async function codeVerifyCreate(body: CodeVerifyObject, setStep: Dispatch<SetStateAction<any>>){
        setFetchingCreateUser(true)
        await api.post('/user/registerCodeVerify', body)
                .then((res: AxiosResponse) => {
                    setFetchingCreateUser(false)
                    api.defaults.headers.common['Authorization'] = `Bearer ${res.data.message}`
                    api.defaults.headers['Authorization'] = `Bearer ${res.data.message}`
                    setStep(2)
                    clearStateCreateUser()
                })
                .catch((e) => {
                    setErrorCreateUser(e.response.data.message)
                    setFetchingCreateUser(false)
                })
    }

    async function createPassword(body: createUserType, setStep: Dispatch<SetStateAction<any>>){
        setFetchingCreateUser(true)
        console.log(api.defaults.headers)
        await api.post('/user/register', body)
                .then((res: AxiosResponse) => {
                    setFetchingCreateUser(false)
                    setStep(3)
                    clearStateCreateUser()
                })
                .catch((e) => {
                    setErrorCreateUser(e.response.data.message)
                    setFetchingCreateUser(false)
                })
    }

    return { fetchingCreateUser, errorCreateUser, clearStateCreateUser, codeVerifyCreate, createPassword }
}