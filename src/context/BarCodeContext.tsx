import {ReactNode, createContext, useState} from 'react'

interface IBarCodeContext {
    readedBarCode: string;
    handleBarCode: (readedBarCode: string, onRead?: () => void) => void;
    reset: () => void;
}

type BarCodeProvider = {
    children: ReactNode
}

export const BarCodeContext = createContext({} as IBarCodeContext)

export function BarCodeProvider({children}: BarCodeProvider){
    const [readedBarCode, setReadedBarCode] = useState<string>('')

    function handleBarCode(readedBarCode: string, onRead?: () => void){
        setReadedBarCode(readedBarCode)
        if(onRead) onRead();
    }

    function reset(){
        setReadedBarCode('')
    }

    return (
        <BarCodeContext.Provider
            value={{
                readedBarCode,
                handleBarCode,
                reset
            }}
        >
            {children}
        </BarCodeContext.Provider>
    )
}