import PropTypes from 'prop-types';
import FieldValidationMessage from './FieldValidationMessage';
import { InputLabel } from '@mui/material';

const withDefaultFormField = (FormFieldComponent) => {
    const Sub = ({ formik, field }) => {
        let { name, label } = field;
        let defaultField = {
            name: name,
            value: formik.values[name],
            onChange: formik.handleChange,
        };
        if (field.required || field.rule_name || field.validation_rules?.length > 0) {
            defaultField = {
                ...defaultField, onBlur: formik.handleBlur,
                error: formik.touched[name] && Boolean(formik.errors[name]),
            }
        }
        return (
            <>
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <FormFieldComponent formik={formik} field={field} defaultField={defaultField} ></FormFieldComponent>
                <FieldValidationMessage field={field} formik={formik} />
            </>
        );
    };
    Sub.propTypes = {
        formik: PropTypes.object,
        field: PropTypes.object,
    };
    return Sub;
};

withDefaultFormField.propTypes = {
    component: PropTypes.element
};

export default withDefaultFormField;
