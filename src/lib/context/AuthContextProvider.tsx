import { useState } from "react";
import { RegisterFields } from "../hooks/useRegisterFormik";
import { AuthContext, AuthContextFields } from "./AuthContext";

interface Props {
   children: React.ReactNode;
}

export const AuthContextProvider = (props: Props) => {
   const [user, setUser] = useState<string | null>(() => {
      const value = localStorage.getItem("user");
      return value;
   });

   const [users, setUsers] = useState([{user:""}])

   const handleLogin = (username: string) => {
      setUser(username);
      localStorage.setItem("user", username);
   };

   const handleLogout = () => {
      setUser(null);
      localStorage.removeItem("user");
   };

   const handleRegister = (values: RegisterFields) =>{
      console.info(values);
   }

   const context: AuthContextFields = {
      user: user,
      onLogin: handleLogin,
      onLogout: handleLogout,
      onRegister: handleRegister,
   };
   return (
      <AuthContext.Provider value={context}>
         {props.children}
      </AuthContext.Provider>
   );
};
