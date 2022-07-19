import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
   username: Yup.string().required("Username is required"),
   email: Yup.string()
      .email("Please enter a valid email!")
      .required("Email is required!"),
   password: Yup.string()
      .required("Password is required")
      .min(8, "Minimum length required 8"),
   confirm_password: Yup.string()
      .required("Confirmation Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
   age: Yup.number()
      .required("Please enter your age!")
      .min(16, "Minimum Age required 16"),
   gender: Yup.string().required("Gender is required!"),
});

export interface RegisterFields {
   username: string;
   email: string;
   password: string;
   confirm_password: string;
   age: string;
   gender: string;
   preferences: string[];
}
interface UseRegisterFormOptions {
   onSubmit: (
      values: RegisterFields,
      formikHelpers: FormikHelpers<RegisterFields>
   ) => void;
}
export const useRegisterFormik = (props: UseRegisterFormOptions) => {
   return useFormik({
      initialValues: {
         username: "",
         email: "",
         password: "",
         confirm_password: "",
         age: "",
         gender: "",
         preferences: [""],
      },
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: RegisterSchema,
      onSubmit: props.onSubmit,
   });
};

export type RegisterFormik = ReturnType<typeof useRegisterFormik>;
