import { ResetForm } from "../../components/resetScreen/resetForm";
import { ViewDismissKeyBoard } from "../../components/shared/ViewDismissKeyboard";
import { ScreenProps } from "../../navigation/stack/types";

export default function ResetPassword({navigation}: ScreenProps){
    return(
        <ViewDismissKeyBoard>
            <ResetForm nav={navigation} />
        </ViewDismissKeyBoard>
    )
}