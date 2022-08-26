import { userRoutes } from "../../config/apiRoutes"
import { api } from "../handleAPI"
import { LoginPayload } from "./types"

export default function loginService(){
    const { login: loginRoute } = userRoutes

    async function login(payload: LoginPayload){
        const loginApi = await api('login')
        return await loginApi.post(loginRoute, payload).then((res) => res)
    }

    return {login}
}