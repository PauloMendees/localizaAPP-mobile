import { useContext } from "react";
import { CameraContext } from "../../context/CameraContext";

export const useCamera = () => useContext(CameraContext)