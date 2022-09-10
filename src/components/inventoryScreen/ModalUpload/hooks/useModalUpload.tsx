import { useState } from "react"

export default function useModalUpload(){
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function handleOpen(){
        setIsOpen(!isOpen)
    }

    return {isOpen, handleOpen}
}