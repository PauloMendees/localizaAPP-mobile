import { useState } from "react"

export default function usePasswordInput(){
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return {showPassword, handleShowPassword}
}