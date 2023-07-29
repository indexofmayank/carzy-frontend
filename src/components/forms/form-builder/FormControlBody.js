/* eslint-disable react/prop-types */
import FormFieldFactory from '../form-fields/FormFieldFactory';

const FormControlBody = ({ fields, formik }) => {
    return (
        <div>
            {fields.map((field) => {
                return <FormFieldFactory formik={formik} key={field.id} field={field}></FormFieldFactory>;
            })}
        </div>
    );
};

export default FormControlBody;
