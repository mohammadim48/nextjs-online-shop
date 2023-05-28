import {  withFormik } from "formik";
import InnerRegisterForm from "shopy/app/components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "shopy/app/contracts/auth";
import * as yup from "yup";


interface RegisterFormProps {
    name: string
    email: string
    password: string
}

const registerFormValidationSchema = yup.object().shape({
    name: yup.string().required().min(4),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

const RegisterForm = withFormik<RegisterFormValuesInterface, RegisterFormProps>({
    mapPropsToValues: props => {
        return {
            name: props.name ?? '',
            email: '',
            password: ''
        }
    },
    validationSchema: registerFormValidationSchema,
    handleSubmit: (values) => {
        console.log(values)
    }
})(InnerRegisterForm)

export default RegisterForm;