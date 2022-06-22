import React, { useContext } from "react";

export interface AuthContextFields {
   user: string | null;
   onLogout: () => void;
   onLogin: (username: string) => void;
}

export const AuthContext = React.createContext<AuthContextFields>({
   user: null,
   onLogin: () => {},
   onLogout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
