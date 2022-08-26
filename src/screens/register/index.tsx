import { RegisterForm } from "../../components/registerScreen/registerForm";
import { ViewDismissKeyBoard } from "../../components/shared/ViewDismissKeyboard";
import { ScreenProps } from "../../navigation/stack/types";

export default function Register({ navigation }: ScreenProps){
    return(
        <ViewDismissKeyBoard>
            <RegisterForm nav={navigation} />
        </ViewDismissKeyBoard>
    )
}