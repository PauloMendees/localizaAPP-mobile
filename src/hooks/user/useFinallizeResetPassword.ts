import { useMutation } from "@tanstack/react-query";
import userResetPasswordService from "../../service/userResetPasswordService";
import { FinallizeResetPayload } from "../../service/userResetPasswordService/types";

function handleMutate(payload: FinallizeResetPayload) {
  return userResetPasswordService()
    .finallizeReset(payload)
    .then((res) => res);
}

export default function useFinallizeResetPassword() {
  return useMutation(handleMutate);
}
