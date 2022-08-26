import { useMutation } from "@tanstack/react-query";
import loginService from "../../service/loginService";
import { LoginPayload } from "../../service/loginService/types";

function handleMutate(payload: LoginPayload){
    return loginService().login(payload).then((res) => res)
}

export default function useLogin(){
    return useMutation(handleMutate);
}