import { FormikProps, Form } from "formik"
import { LoginFormValuesInterface } from "shopy/app/contracts/auth"
import Input from "../shared/form/input"



const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {

    return (
        <>
            <Form className="space-y-4 md:space-y-6">
                <div>
                    <Input name="email" type="email" label="ایمیل شما" placeholder="لطفا ایمیل خود را وارد کنید" />
                </div>

                <div>
                    <Input name="password" label="رمزعبور شما" type="password" placeholder="لطفا رمز عبور را وارد کنید" />
                </div>

                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">ورود</button>

            </Form>
        </>
    )

}
export default InnerLoginForm;