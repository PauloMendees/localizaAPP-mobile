import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import useAsyncStorage from "../../../../hooks/asyncStorage/useAsyncStorage";
import { useSnackBar } from "../../../../hooks/contexts/useSnackBar";
import useFinallizeRegister from "../../../../hooks/user/useFinallizeRegister";
import useInitRegisterUser from "../../../../hooks/user/useInitRegisterUser";
import useRegisterVerify from "../../../../hooks/user/useRegisterVerify";
import {
  RegisterFinallizePayload,
  RegisterVerifyPayload,
  InitRegisterPayload,
} from "../../../../service/userRegisterService/types";
import { Confirmation } from "../steps/Confirmation";
import { StepOne } from "../steps/StepOne";
import { StepThree } from "../steps/StepThree";
import { StepTwo } from "../steps/StepTwo";

type Props = {
  nav: NativeStackNavigationProp<any>;
};

export default function useRegisterForm({ nav }: Props) {
  const [actualStep, setActualStep] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {dispatchSnackbar} = useSnackBar()
  const { storeData } = useAsyncStorage();

  const {
    mutateAsync: finallizeRegisterRequest,
    isLoading: finallizeLoading,
    reset: finallizeReset,
  } = useFinallizeRegister();

  const {
    mutateAsync: initRegisterRequest,
    isLoading: initRegisterLoading,
    reset: resetInit,
  } = useInitRegisterUser();

  const {
    mutateAsync: registerVerifyRequest,
    isLoading: registerVerifyLoading,
    reset: resetVerify,
  } = useRegisterVerify();

  function clearState() {
    resetInit();
    resetVerify();
    finallizeReset();
    setErrorMessage("");
  }

  function onError(err: any) {
    dispatchSnackbar(err.response.data.message, 'error');
  }


  async function finallizeRegister() {
    finallizeReset()
    const payload: RegisterFinallizePayload = {
      confirmPassword,
      email,
      password,
    };

    await finallizeRegisterRequest(payload, {
      onError
    });
  }

  async function verifyRegister() {
    const payload: RegisterVerifyPayload = {
      email,
      code,
    };

    await registerVerifyRequest(payload, {
      onSuccess: async (res) => {
        await storeData("registerToken", res.data.message);
      },
      onError
    });
  }

  async function initRegister() {
    const payload: InitRegisterPayload = {
      email,
    };

    await initRegisterRequest(payload, {
      onSuccess: () => {
        setActualStep(actualStep + 1);
      },
      onError
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
        if (email) await initRegister();
        setActualStep(actualStep + 1);
        break;

      case 1:
        if (code) await verifyRegister();
        setActualStep(actualStep + 1);
        break;

      case 2:
        if(password && confirmPassword) await finallizeRegister()
        setActualStep(actualStep + 1)
        break;

      default:
        break;
    }
    if (actualStep === 3) return;
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
    initRegisterLoading,
    registerVerifyLoading,
    errorMessage,
    clearState,
    finallizeLoading
  };
}
