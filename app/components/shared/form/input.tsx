import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface InputProps {
    name: string,
    label: string,
    labelClassName?: string,
    type?: string,
    inputClassName?: string,
    errorClassName?: string,
    placeholder: string
}

const Input: FC<InputProps> = ({
    name,
    type = 'text',
    label,
    placeholder,
    labelClassName,
    inputClassName,
    errorClassName
}) => {
    return (
        <>
            <label htmlFor={name} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelClassName ?? ''}`}>
                {label}
            </label>
            <Field type={type} name={name} id={name} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClassName ?? ''}`} placeholder={placeholder} />
            <ErrorMessage name={name} className={`text-red-500 ${errorClassName ?? ''}`} component="div" />
        </>

    )
}


export default Input;