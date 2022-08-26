import { PasswordInput } from "../../../../shared/Inputs/password";

type Props = {
    passwordValue: string
    handlePassword: (newEmail: string) => void
    confirmPasswordValue: string
    handleConfirmPassword: (newEmail: string) => void
  }

export function StepThree({confirmPasswordValue, handleConfirmPassword, handlePassword, passwordValue}: Props){
    return(
        <>
            <PasswordInput handleValue={handlePassword} value={passwordValue} mb={4} placeholder="Nova senha" />
            <PasswordInput handleValue={handleConfirmPassword} value={confirmPasswordValue} mb={4} placeholder="Confirmação de nova senha" />
        </>
    )
}