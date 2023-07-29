// import fieldTypes from '../../../constants/FieldType';
import TextField from './TextField';
// import PasswordField from './PasswordField';
// import CheckboxField from './CheckboxField';

const FormFieldFactory = ({ field, formik }) => {
    return <TextField formik={formik} field={field} />;
    // const type = field.type;
    // let jsx;
    // switch (type) {
    //     case fieldTypes.email:
    //         jsx = <TextField1 formik={formik} field={field} />;
    //         break;
    //     case fieldTypes.text:
    //         jsx = <TextField1 formik={formik} field={field} />;
    //         break;
    //     case fieldTypes.password:
    //         jsx = <PasswordField formik={formik} field={field} />;
    //         break;
    //     case fieldTypes.checkbox:
    //         jsx = <CheckboxField formik={formik} field={field} />;
    //         break;
    //     default:
    //         jsx = <TextField1 formik={formik} field={field} />;
    //         break;
    // }
    // return jsx;

};

export default FormFieldFactory;
