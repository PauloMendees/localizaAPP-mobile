import { useMutation } from "@tanstack/react-query";
import userRegisterService from "../../service/userRegisterService";
import { RegisterFinallizePayload } from "../../service/userRegisterService/types";

function handleMutate(payload: RegisterFinallizePayload){
    return userRegisterService().registerFinallize(payload).then((res) => res)
}

export default function useFinallizeRegister(){
    return useMutation(handleMutate)
}