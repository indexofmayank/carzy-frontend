import { default as MuiTextField } from '@mui/material/TextField';
import PropTypes from 'prop-types';
import withCommonFormField from './withCommonFormField';
import withCommonTextFormField from './withCommonTextFormField';

const TextField = ({ defaultField }) => {
    return (
        <div>
            <MuiTextField {...defaultField} />
        </div>
    );
};

TextField.propTypes = {
    defaultField: PropTypes.object,
    formik: PropTypes.object
};

export default withCommonTextFormField(withCommonFormField(TextField));
