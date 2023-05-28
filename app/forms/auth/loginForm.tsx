import { Form, FormikProps, withFormik } from "formik";
import Input from "shopy/app/components/shared/form/input";
import * as yup from "yup";

interface LoginFormValues {
    email: string,
    password: string
}


const InnerLoginForm = (props: FormikProps<LoginFormValues>) => {

    return (
        <>
            <Form className="space-y-4 md:space-y-6">
                <div>
                    <Input name="email" type="email" label="Email Address" placeholder="Enter your Email" />
                </div>

                <div>
                    <Input name="password" label="Your Password" type="password" placeholder="Enter your Password" />
                </div>

                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>

            </Form>
        </>
    )

}

interface LoginFormProps {
    email: string
    password: string
}

const registerFormValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

const LoginForm = withFormik<LoginFormValues, LoginFormProps>({
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