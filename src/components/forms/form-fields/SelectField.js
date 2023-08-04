import PropTypes from 'prop-types';
import { InputLabel, OutlinedInput } from '@mui/material';
import FieldValidationMessage from './FieldValidationMessage';

const SelectField = ({ field, formik }) => {
    const fieldName = field.name;
    const label = field.label;
    const extraConf = field.extraConf ?? {};
    let defaultField = {
        name: fieldName,
        type: field.type,
        placeholder: `Enter ${field.label}`,
        value: formik.values[fieldName],
        onChange: formik.handleChange,
        ...extraConf
    };
    if (field.required && field.validations?.length > 0) {
        defaultField = {
            ...defaultField, onBlur: formik.handleBlur,
            error: formik.touched[fieldName] && Boolean(formik.errors[fieldName]),
        }
    }
    return (
        <>
            <InputLabel htmlFor={fieldName}>{label}</InputLabel>
            <OutlinedInput select {...defaultField} fullWidth />
            <FieldValidationMessage field={field} formik={formik} />
        </>
    );
};

SelectField.propTypes = {
    field: PropTypes.object,
    formik: PropTypes.object
};

export default SelectField;
