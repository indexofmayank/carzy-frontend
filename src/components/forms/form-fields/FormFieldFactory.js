import fieldTypes from '../../../constants/FieldType';
import { Grid, Stack, InputLabel, OutlinedInput } from '@mui/material';
import TextField from './TextField';
// import TextField from './TextField';
// import PasswordField from './PasswordField';
// import CheckboxField from './CheckboxField';

const FormFieldFactory = ({ field, formik }) => {
    const type = field.type;
    let jsx = "";
    switch (type) {
        case fieldTypes.email:
            jsx = <TextField formik={formik} field={field} />;
            break;
        // case fieldTypes.text:
        //     jsx = <TextField formik={formik} field={field} />;
        //     break;
        case fieldTypes.password:
            jsx = <TextField formik={formik} field={field} />;
            break;
        case fieldTypes.checkbox:
            jsx = <TextField formik={formik} field={field} />;
            break;
        case fieldTypes.select:
            jsx = <TextField formik={formik} field={field} />;
            break;
        case fieldTypes.autocomplete:
            jsx = <TextField formik={formik} field={field} />;
            break;
        case fieldTypes.toggle:
            jsx = <TextField formik={formik} field={field} />;
            break;
        default:
            jsx = <TextField formik={formik} field={field} />;
            break;
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={1}>
                {jsx}
                {/* <InputLabel htmlFor="address-for">Address</InputLabel>
                <OutlinedInput id="address-for" type="text" name="address" placeholder="Enter Address" fullWidth /> */}
            </Stack>
        </Grid>
    )
    // return jsx;

};

export default FormFieldFactory;
