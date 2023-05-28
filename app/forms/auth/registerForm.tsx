import { Form, FormikProps, withFormik } from "formik";
import Input from "shopy/app/components/shared/form/input";
import * as yup from "yup";

interface RegisterFormValues {
    name: string,
    email: string,
    password: string
}

const InnerRegisterForm = (props: FormikProps<RegisterFormValues>) => {

    return (
        <>
            <Form className="space-y-4 md:space-y-6">
                <div>
                    <Input name="email" type="email" label="Email Address" placeholder="Enter your Email" />
                </div>
                <div>
                    <Input name="name" label="Name" placeholder="Enter your Name" />
                </div>
                <div>
                    <Input name="password" label="Your Password" type="password" placeholder="Enter your Password" />
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
            </Form>
        </>
    )

}


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

const RegisterForm = withFormik<RegisterFormValues, RegisterFormProps>({
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