import { useMutation } from "@tanstack/react-query";
import userResetPasswordService from "../../service/userResetPasswordService";
import { InitResetPayload } from "../../service/userResetPasswordService/types";

function handleMutate(payload: InitResetPayload){
    return userResetPasswordService().resetPasswordInit(payload).then((res) => res)
}

export default function useInitResetPassword(){
    return useMutation(handleMutate);
}