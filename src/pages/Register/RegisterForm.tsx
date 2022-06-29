import {
   Box,
   Button,
   Checkbox,
   FormControl,
   FormControlLabel,
   FormGroup,
   FormLabel,
   Radio,
   RadioGroup,
   TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { RegisterFormik } from "../../lib/hooks/useRegisterFormik";

interface Props {
   formik: RegisterFormik;
}

export const RegisterForm = ({ formik }: Props) => {
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
            <h1>Register </h1>

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
            <TextField
               label="Email"
               name="email"
               type="text"
               sx={{ width: "100%" }}
               onChange={formik.handleChange}
               value={formik.values.email}
               error={Boolean(formik.errors.email && formik.touched.email)}
            />
            {formik.errors.email && formik.touched.email && (
               <Box sx={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.email}
               </Box>
            )}
            <TextField
               label="Password"
               name="password"
               type="password"
               sx={{ width: "100%" }}
               onChange={formik.handleChange}
               value={formik.values.password}
               error={Boolean(
                  formik.errors.password && formik.touched.password
               )}
            />
            {formik.errors.password && formik.touched.password && (
               <Box sx={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.password}
               </Box>
            )}
            <TextField
               label="Confirm Password"
               name="confirm_password"
               type="password"
               sx={{ width: "100%" }}
               onChange={formik.handleChange}
               value={formik.values.confirm_password}
               error={Boolean(
                  formik.errors.confirm_password &&
                     formik.touched.confirm_password
               )}
            />
            {formik.errors.confirm_password &&
               formik.touched.confirm_password && (
                  <Box sx={{ color: "red", fontSize: "12px" }}>
                     {formik.errors.confirm_password}
                  </Box>
               )}

            <TextField
               label="Age"
               name="age"
               type="number"
               sx={{ width: "100%" }}
               onChange={formik.handleChange}
               value={formik.values.age}
               error={Boolean(formik.errors.age && formik.touched.age)}
            />
            {formik.errors.age && formik.touched.age && (
               <Box sx={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.age}
               </Box>
            )}
            <FormControl
               error={Boolean(formik.errors.gender && formik.touched.gender)}
            >
               <FormLabel id="gender-label">Gender</FormLabel>
               <RadioGroup
                  aria-labelledby="gender-label"
                  name="gender"
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                  sx={{
                     flexDirection: "row",
                  }}
               >
                  <FormControlLabel
                     value="female"
                     control={<Radio />}
                     label="Female"
                  />
                  <FormControlLabel
                     value="male"
                     control={<Radio />}
                     label="Male"
                  />
               </RadioGroup>
               {formik.errors.gender && formik.touched.gender && (
                  <Box sx={{ color: "red", fontSize: "12px" }}>
                     {formik.errors.gender}
                  </Box>
               )}
            </FormControl>
            <FormControl
               error={Boolean(formik.errors.gender && formik.touched.gender)}
            >
               <FormGroup>
                  <FormLabel>Preferences</FormLabel>
                  <div style={{ flexDirection: "row" }}>
                     <FormControlLabel
                        control={<Checkbox onChange={formik.handleChange} />}
                        name="preferences"
                        label="Action"
                        value="action"
                     />
                     <FormControlLabel
                        control={<Checkbox onChange={formik.handleChange} />}
                        name="preferences"
                        label="Comedy"
                        value="comedy"
                     />
                     <FormControlLabel
                        control={<Checkbox onChange={formik.handleChange} />}
                        name="preferences"
                        label="Sci-Fi"
                        value="sci-fi"
                     />
                     <FormControlLabel
                        control={<Checkbox onChange={formik.handleChange} />}
                        name="preferences"
                        label="Drama"
                        value="drama"
                     />
                     <FormControlLabel
                        control={<Checkbox onChange={formik.handleChange} />}
                        name="preferences"
                        label="Thriller"
                        value="thriller"
                     />
                     <FormControlLabel
                        control={<Checkbox onChange={formik.handleChange} />}
                        name="preferences"
                        label="Other"
                        value="other"
                     />
                  </div>
               </FormGroup>
            </FormControl>

            <Button type="submit" variant="contained">
               Register
            </Button>
            <Link to="/login" color="secondary">
               Back to Login
            </Link>
         </form>
      </>
   );
};
