import * as yup from "yup";

export const formValidationSchema = yup.object({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),

  userName: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .required("Username is required"),

  name: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .required("Name is required"),

  password: yup
    .string()
    .min(8, "Must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Please confirm your password"),

  phone: yup
    .string()
    .matches(/^01[0-2,5]{1}[0-9]{8}$/, "Enter a valid phone number")
    .required("Phone is required"),

  image: yup.mixed().required("An image is required"),
});
