import PropTypes from 'prop-types';
import { OutlinedInput } from '@mui/material';
import withDefaultFormField from './withDefaultFormField';

const TextField = ({ defaultField, field, formik }) => {
    let textField = {
        ...defaultField,
        type: "text"
    };
    return (
        <OutlinedInput {...textField} fullWidth />
    );
};

TextField.propTypes = {
    defaultField: PropTypes.object,
    field: PropTypes.object,
    formik: PropTypes.object,
};

export default withDefaultFormField(TextField);
