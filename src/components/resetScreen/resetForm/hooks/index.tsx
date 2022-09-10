import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import useAsyncStorage from "../../../../hooks/asyncStorage/useAsyncStorage";
import { useSnackBar } from "../../../../hooks/contexts/useSnackBar";
import useFinallizeResetPassword from "../../../../hooks/user/useFinallizeResetPassword";
import useInitResetPassword from "../../../../hooks/user/useInitResetPassword";
import useResetVerify from "../../../../hooks/user/useResetVerify";
import {
  FinallizeResetPayload,
  InitResetPayload,
  ResetVerifyPayload,
} from "../../../../service/userResetPasswordService/types";
import { Confirmation } from "../steps/Confirmation";
import { StepOne } from "../steps/StepOne";
import { StepThree } from "../steps/StepThree";
import { StepTwo } from "../steps/StepTwo";

type Props = {
  nav: NativeStackNavigationProp<any>;
};

export default function useResetForm({ nav }: Props) {
  const [actualStep, setActualStep] = useState<number>(0);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {dispatchSnackbar} = useSnackBar()

  const { storeData } = useAsyncStorage();

  const {
    mutateAsync: initResetRequest,
    isLoading: isLoadingInit,
    reset: resetInitRequest,
  } = useInitResetPassword();

  const {
    mutateAsync: verifyResetRequest,
    isLoading: isLoadingVerify,
    reset: resetVerifyRequest,
  } = useResetVerify();

  const {
    mutateAsync: finallizeResetRequest,
    isLoading: isLoadingFinallize,
    reset: resetFinallizeRequest,
  } = useFinallizeResetPassword();

  function onError(err: any) {
    dispatchSnackbar(err.response.data.message, 'error');
  }

  function clearState() {
    setErrorMessage("");
    resetInitRequest();
    resetVerifyRequest();
    resetFinallizeRequest();
  }

  async function initReset() {
    const payload: InitResetPayload = {
      email,
    };

    await initResetRequest(payload, {
      onSuccess: () => {
        setActualStep(actualStep + 1);
      },
      onError,
    });
  }

  async function resetVerify() {
    const payload: ResetVerifyPayload = {
      code,
      email,
    };

    await verifyResetRequest(payload, {
      onSuccess: async (res) => {
        await storeData("resetToken", res.data.message);
        setActualStep(actualStep + 1);
      },
      onError,
    });
  }

  async function finallizeReset() {
    const payload: FinallizeResetPayload = {
      email,
      confirm_new_password: confirmPassword,
      new_password: password,
    };

    await finallizeResetRequest(payload, {
      onSuccess: () => {
        setActualStep(actualStep + 1);
      },
      onError,
    });
  }

  function handleEmail(newText: string) {
    setEmail(newText);
  }

  function handlePassword(newText: string) {
    setPassword(newText);
  }

  function handleConfirmPassword(newText: string) {
    setConfirmPassword(newText);
  }

  function handleCode(newText: string) {
    setCode(newText);
  }

  async function nextStep() {
    switch (actualStep) {
      case 0:
        if (email) await initReset();
        break;

      case 1:
        await resetVerify();
        break;

      case 2:
        await finallizeReset();
        break;

      default:
        break;
    }
  }

  function previousStep() {
    if (actualStep === 0) {
      nav.navigate("Login");
    }
    setActualStep(actualStep - 1);
  }

  const steps = [
    <StepOne emailValue={email} handleEmail={handleEmail} />,
    <StepTwo codeValue={code} handleCode={handleCode} />,
    <StepThree
      confirmPasswordValue={confirmPassword}
      handleConfirmPassword={handleConfirmPassword}
      handlePassword={handlePassword}
      passwordValue={password}
    />,
    <Confirmation />,
  ];

  return {
    steps,
    actualStep,
    nextStep,
    previousStep,
    isLoadingFinallize,
    isLoadingInit,
    isLoadingVerify,
    errorMessage,
    clearState,
  };
}
