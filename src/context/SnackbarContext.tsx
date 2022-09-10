import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Snackbar } from "../components/shared/Snackbar";
import { colors } from "../theme/colors";

type status = "success" | "error" | "info" | "warning" | "";

type ContextProviderProps = {
  children: ReactNode;
};

type SnackBarContextProps = {
  dispatchSnackbar: (message: string, status: status) => void;
};

export const SnackBarContext = createContext<SnackBarContextProps>({} as SnackBarContextProps);

export const SnackbarProvider = ({ children }: ContextProviderProps) => {
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<status>("");
  const reset = useCallback(() => {
    setMessage("");
    setStatus("");
  }, []);

  const value = useMemo(
    () => ({
      dispatchSnackbar: (message: string, status: status) => {
        setMessage(message);
        setStatus(status);
      },
    }),
    []
  );

  return (
    <SnackBarContext.Provider
      value={value}
    >
      {children}
      {message ? (
        <Snackbar
          status={status}
          message={message}
          onClose={reset}
          color={colors.light.cian}
        />
      ) : (
        <></>
      )}
    </SnackBarContext.Provider>
  );
};