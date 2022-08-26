import { userRoutes } from "../../config/apiRoutes";
import { api } from "../handleAPI";
import {
  FinallizeResetPayload,
  ResetVerifyPayload,
  InitResetPayload,
} from "./types";

export default function userResetPasswordService() {
  const { initResetPassword, verifyResetCode, changePasswordReset } =
    userRoutes;

  async function resetPasswordInit(payload: InitResetPayload) {
    const authApi = await api("reset");
    return await authApi.post(initResetPassword, payload).then((res) => res);
  }

  async function verifyCodeReset(payload: ResetVerifyPayload) {
    const authApi = await api("reset");
    return await authApi.post(verifyResetCode, payload).then((res) => res);
  }

  async function finallizeReset(payload: FinallizeResetPayload) {
    const authApi = await api("reset");
    return await authApi.put(changePasswordReset, payload).then((res) => res);
  }

  return {resetPasswordInit, verifyCodeReset, finallizeReset};
}
