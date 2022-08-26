import { ViewDismissKeyBoard } from "../../components/shared/ViewDismissKeyboard";
import { ScreenProps } from "../../navigation/stack/types";
import { LoginForm } from "../../components/loginScreen/loginForm";

export default function Login({ navigation }: ScreenProps) {

  return (
    <ViewDismissKeyBoard>      
        <LoginForm nav={navigation} />
    </ViewDismissKeyBoard>
  );
}
