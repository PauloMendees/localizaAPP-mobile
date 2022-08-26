import { useState } from "react"
import { useAuth } from "../../../../hooks/contexts/useAuth"
import { LoginPayload } from "../../../../service/loginService/types"

export default function useLoginForm(){
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {signIn, isLoading, errorMessage, isAuthenticated, clearState} = useAuth()

    function handleEmail(newText: string){
        setEmail(newText)
    }

    function handlePassword(newText: string){
        setPassword(newText)
    }

    async function handleLogin(cb?: () => void){
        const payload: LoginPayload = {
            email, password
        }
        await signIn(payload, () => {
            if(cb) cb();
        })
    }

    return{
        handleEmail,
        handlePassword,
        email,
        password,
        handleLogin,
        isLoading,
        errorMessage,
        isAuthenticated,
        clearState
    }
}