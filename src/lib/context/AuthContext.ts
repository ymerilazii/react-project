import React, { useContext } from "react";
import { RegisterFields } from "../hooks/useRegisterFormik";

export interface AuthContextFields {
   user: string | null;
   onLogout: () => void;
   onLogin: (username: string) => void;
   onRegister: (
      values: RegisterFields
   ) => void;
}

export const AuthContext = React.createContext<AuthContextFields>({
   user: null,
   onLogin: () => {},
   onLogout: () => {},
   onRegister: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
