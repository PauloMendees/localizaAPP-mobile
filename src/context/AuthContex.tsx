import { createContext, ReactNode, useState } from "react";
import useAsyncStorage from "../hooks/asyncStorage/useAsyncStorage";
import { useSnackBar } from "../hooks/contexts/useSnackBar";
import useLogin from "../hooks/user/useLogin";
import { LoginPayload } from "../service/loginService/types";

interface IAuthContext {
  isAuthenticated: boolean;
  token: string;
  isLoading: boolean;
  errorMessage: string;
  signIn: (payload: LoginPayload, callback?: () => void) => void;
  clearState: () => void;
  cacheVerify: (callback?: () => void) => void;
}

type AuthProvider = {
  children: ReactNode;
};

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: AuthProvider) {
  const [token, setToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { mutateAsync: loginRequest, isLoading, reset } = useLogin();
  const { storeData, getData } = useAsyncStorage();

  const {dispatchSnackbar} = useSnackBar();

  function clearState() {
    reset();
    setIsAuthenticated(false);
    setErrorMessage("");
    setToken("");
  }

  async function cacheVerify(callback?: () => void) {
    const token = await getData("navigationToken");
    if (token) {
      setToken(token);
      setIsAuthenticated(true);
      if (callback) callback();
    }
  }

  async function signIn(payload: LoginPayload, callback?: () => void) {
    await loginRequest(payload, {
      onSuccess: async (res) => {
        setToken(res.data.message);
        await storeData("navigationToken", res.data.message);
        setIsAuthenticated(true);
        if (callback) callback();
      },
      onError: (err) => {
        //@ts-ignore
        dispatchSnackbar(err.response.data.message, 'error')
      },
    });
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        signIn,
        errorMessage,
        token,
        clearState,
        cacheVerify,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
