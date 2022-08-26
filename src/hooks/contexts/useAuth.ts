import { useContext } from "react";
import { AuthContext } from "../../context/AuthContex";

export const useAuth = () => useContext(AuthContext)