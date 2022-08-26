export type InitRegisterPayload = {
    email: string
}

export type RegisterVerifyPayload = {
    code: string,
    email: string
}

export type RegisterFinallizePayload = {
    email: string,
    password: string,
    confirmPassword: string,

}