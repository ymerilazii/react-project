import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../lib/context/AuthContext";
import { useLoginFormik } from "../../lib/hooks/useLoginFormik";
import { LoginForm } from "./LoginForm";

export const Login = () => {
   const { user, onLogin } = useAuthContext();

   const formik = useLoginFormik({
      onSubmit(values, formikHelpers) {
         onLogin(values.username);
      },
   });
   
   

   return (
      <div
         style={{
            margin: "50px",
         }}
      >
         <LoginForm formik={formik} />
      </div>
   );
};
