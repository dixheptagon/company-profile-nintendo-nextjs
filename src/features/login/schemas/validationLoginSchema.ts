import * as yup from "yup";

export const validationLoginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
      "Password must contain at least one letter and one number",
    )
    .required("Password is required"),
});
