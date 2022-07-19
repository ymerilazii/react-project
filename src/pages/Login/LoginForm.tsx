import { TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { LoginFormik } from "../../lib/hooks/useLoginFormik";

interface Props {
   formik: LoginFormik;
}

export const LoginForm = ({ formik }: Props) => {
   return (
      <>
         <form
            onSubmit={formik.handleSubmit}
            style={{
               display: "flex",
               flexDirection: "column",
               rowGap: "20px",
               width: "400px",
            }}
         >
            <h1>Login </h1>
            <div style={{ width: "100%" }}>
               <TextField
                  label="Username"
                  name="username"
                  type="text"
                  sx={{ width: "100%" }}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  error={Boolean(
                     formik.errors.username && formik.touched.username
                  )}
               />
               {formik.errors.username && formik.touched.username && (
                  <Box sx={{ color: "red", fontSize: "12px" }}>
                     {formik.errors.username}
                  </Box>
               )}
            </div>
            <div style={{ width: "100%" }}>
               <TextField
                  label="Password"
                  type="password"
                  sx={{ width: "100%" }}
                  onChange={formik.handleChange}
                  name="password"
                  value={formik.values.password}
                  autoComplete="current-password"
                  error={Boolean(
                     formik.errors.password && formik.touched.password
                  )}
               />
               {formik.errors.password && formik.touched.password && (
                  <Box sx={{ color: "red", fontSize: "12px" }}>
                     {formik.errors.password}
                  </Box>
               )}
            </div>
            <Button type="submit" variant="contained">
               Log in
            </Button>
            <Link to="/register" color="secondary">
               Register
            </Link>
         </form>
      </>
   );
};
