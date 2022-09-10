import { useContext } from "react";
import { SnackBarContext } from "../../context/SnackbarContext";

export const useSnackBar = () => useContext(SnackBarContext);