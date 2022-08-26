export type InitResetPayload = {
    email: string
}

export type ResetVerifyPayload = {
    code: string,
    email: string
}

export type FinallizeResetPayload = {
    email: string,
    new_password: string,
    confirm_new_password: string
}