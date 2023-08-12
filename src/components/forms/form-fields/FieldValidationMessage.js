import PropTypes from 'prop-types';
import { FormHelperText } from '@mui/material';

const FieldValidationMessage = ({ formik, field }) => {
    const fieldName = field.name;
    let isError = formik.touched[fieldName] && formik.errors[fieldName];
    return (
        isError &&
        <FormHelperText error>
            {formik.errors[fieldName]}
        </FormHelperText>
    )
};

FieldValidationMessage.propTypes = {
    formik: PropTypes.object,
    field: PropTypes.object
};

export default FieldValidationMessage;