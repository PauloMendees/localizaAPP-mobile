import { useState } from "react"

export default function useLogin(){
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return {showPassword, handleShowPassword}
}