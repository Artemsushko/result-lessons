import * as yup from "yup";

export const authorizationSchema = yup.object().shape({
  login: yup
    .string()
    .required("Field is required")
    .matches(
      /^[A-Za-z0-9._]+$/,
      "Username may contain only letters, numbers, dots, and underscores"
    )
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username must be no more than 15 characters"),

  password: yup
    .string()
    .required("Field is required")
    .matches(
      /^[\w#$%\-_]+$/,
      "Password may contain only letters, numbers, _, #, -, $, and %"
    )
    .min(5, "Password must be at least 5 characters")
    .max(20, "Password must be no more than 20 characters"),
});
