import { default as MuiTextField } from '@mui/material/TextField';
import PropTypes from 'prop-types';
import withCommonFormField from './withCommonFormField';
import withCommonTextFormField from './withCommonTextFormField';
// import OutlinedInput from 'themes/overrides/OutlinedInput';
// import InputLabel from 'themes/overrides/InputLabel';
import { Grid, Stack, InputLabel, OutlinedInput } from '@mui/material';

const TextField = ({ field, formik }) => {
    const fieldName = field.name;
    const label = field.label;
    const extraConf = field.extraConf ?? {};
    const defaultField = {
        name: fieldName,
        type: field.type,
        placeholder: `Enter ${field.label}`,
        value: formik.values[fieldName],
        // error: formik.touched[fieldName] && Boolean(formik.errors[fieldName]),
        // helperText: formik.touched[fieldName] && formik.errors[fieldName],
        ...extraConf
    };
    return (
        <>
            <InputLabel htmlFor={fieldName}>{label}</InputLabel>
            <OutlinedInput {...defaultField} fullWidth />
        </>
    );
};

TextField.propTypes = {
    field: PropTypes.object,
    formik: PropTypes.object
};

export default TextField;
