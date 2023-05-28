import {  withFormik } from "formik";
import InnerLoginForm from "shopy/app/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "shopy/app/contracts/auth";
import * as yup from "yup";

interface LoginFormProps {
    email: string
    password: string
}

const registerFormValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

const LoginForm = withFormik<LoginFormValuesInterface, LoginFormProps>({
    mapPropsToValues: props => {
        return {
            email: props.email ?? '',
            password: props.password ?? ''
        }
    },
    validationSchema: registerFormValidationSchema,
    handleSubmit: (values) => {
        console.log(values)
    }
})(InnerLoginForm)

export default LoginForm;