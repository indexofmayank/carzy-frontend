import { ErrorMessage, Field } from 'formik';
import withCommonFormField from './withCommonTextFormField';

const PasswordField = ({ field, formik }) => {
    const { name, placeholder, label } = field;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field type="password" name={name} placeholder={placeholder} />
            <ErrorMessage name={name}></ErrorMessage>
        </div>
    );
};

export default withCommonFormField(PasswordField);