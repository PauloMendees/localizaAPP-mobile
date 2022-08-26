import { useMutation } from "@tanstack/react-query";
import userRegisterService from "../../service/userRegisterService";
import { RegisterVerifyPayload } from "../../service/userRegisterService/types";

function handleMutate(payload: RegisterVerifyPayload){
    return userRegisterService().registerVerify(payload).then((res) => res)
}

export default function useRegisterVerify(){
    return useMutation(handleMutate)
}