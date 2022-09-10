import { useContext } from "react";
import { BarCodeContext } from "../../context/BarCodeContext";

export const useBarCode = () => useContext(BarCodeContext)