import { userRoutes } from "../../config/apiRoutes"
import { api } from "../handleAPI"
import { InitRegisterPayload, RegisterFinallizePayload, RegisterVerifyPayload } from "./types"

export default function userRegisterService(){
    const { startRegister, registerCodeVerify, finalizeRegister } = userRoutes

    async function registerInit(payload: InitRegisterPayload){
        const regApi = await api('register');
        return await regApi.post(startRegister, payload).then((res) => res);
    }

    async function registerVerify(payload: RegisterVerifyPayload){
        const regApi = await api('register');
        return await regApi.post(registerCodeVerify, payload).then((res) => res);
    }

    async function registerFinallize(payload: RegisterFinallizePayload){
        const regApi = await api('register');
        return await regApi.post(finalizeRegister, payload).then((res) => res)
    }

    return {registerInit, registerVerify, registerFinallize}
}