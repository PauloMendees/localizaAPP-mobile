import {ReactNode, createContext, useState} from 'react'

export type Picture = {
    height: number,
    uri: string,
    width: number
}

interface ICameraContext {
    picture: Picture | null;
    handlePicture: (picture: Picture, onPhoto?: () => void) => void;
    reset: () => void;
}

type CameraProvider = {
    children: ReactNode
}

export const CameraContext = createContext({} as ICameraContext)

export function CameraProvider({children}: CameraProvider){
    const [picture, setPicture] = useState<Picture | null>(null)

    function handlePicture(picture: Picture, onPhoto?: () => void){
        setPicture(picture)
        if(onPhoto) onPhoto();
    }

    function reset(){
        setPicture(null)
    }

    return (
        <CameraContext.Provider
            value={{
                picture,
                handlePicture,
                reset
            }}
        >
            {children}
        </CameraContext.Provider>
    )
}