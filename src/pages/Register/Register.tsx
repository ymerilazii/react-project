import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../lib/context/AuthContext";
import { useRegisterFormik } from "../../lib/hooks/useRegisterFormik";
import { RegisterForm } from "./RegisterForm";

export const Register = () => {
   const { user, onRegister } = useAuthContext();

   const formik = useRegisterFormik({
      onSubmit(values, formikHelpers){
         console.log(typeof values);
         const {username , email, age, gender} = values
         onRegister(values);
      },
   });

   if (user !== null) {
      return <Navigate to="/" />;
   }

   return(
      <div style={{
         margin: "50px",
      }}>
         <RegisterForm formik={formik} />
      </div>
   )
};
