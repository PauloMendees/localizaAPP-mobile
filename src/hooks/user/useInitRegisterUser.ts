import { useMutation } from "@tanstack/react-query";
import userRegisterService from "../../service/userRegisterService";
import { InitRegisterPayload } from "../../service/userRegisterService/types";

function handleMutateInit(payload: InitRegisterPayload){
    return userRegisterService().registerInit(payload).then((res) => res)
}

export default function useInitRegisterUser(){
    return useMutation(handleMutateInit);

}