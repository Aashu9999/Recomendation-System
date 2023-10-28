import * as Yup from 'yup';

export const SignUpSchema = Yup.object({
    name : Yup.string().min(2).max(25).required("Enter a username"),
    email: Yup.string().email().required("Enter valid mail"),
    password: Yup.string().min(8).required("Enter a password"),
    conform_password : Yup.string().required("Enter correct password").oneOf([Yup.ref("password"), null], "password must match"),
});

export const LoginSchema = Yup.object({
    name : Yup.string().min(2).max(25).required("Enter a correct username"),
    password: Yup.string().min(8).required("Enter a correct password"),
});

export const ForgetPasswordSchema = Yup.object({
    email : Yup.string().email().required("Enter the valid email"),
})
