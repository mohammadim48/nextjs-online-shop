import { Form, FormikProps } from "formik"
import Input from "../shared/form/input"
import { RegisterFormValuesInterface } from "shopy/app/contracts/auth"


const InnerRegisterForm = (props: FormikProps<RegisterFormValuesInterface>) => {

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
                    <Input name="password" label="Your Password" type="password" placeholder="لطفا رمرعبور را وارد کنید" />
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
            </Form>
        </>
    )

}

export default InnerRegisterForm;