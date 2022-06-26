import { useLoginFormik } from "../../lib/hooks/useLoginFormik";
import { LoginForm } from "./LoginForm";

interface Props {
   onLogin: (username: string) => void;
}

export const Login = (props: Props) => {
   const formik = useLoginFormik({
      onSubmit(values, formikHelpers) {
         props.onLogin(values.username);
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
