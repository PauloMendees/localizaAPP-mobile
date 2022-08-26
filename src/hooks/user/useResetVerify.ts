import { useMutation } from "@tanstack/react-query";
import userResetPasswordService from "../../service/userResetPasswordService";
import { ResetVerifyPayload } from "../../service/userResetPasswordService/types";

function handleMutate(payload: ResetVerifyPayload){
    return userResetPasswordService().verifyCodeReset(payload).then((res) => res);
}

export default function useResetVerify(){
    return useMutation(handleMutate)
}