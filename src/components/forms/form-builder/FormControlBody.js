/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import FormFieldFactory from '../form-fields/FormFieldFactory';

const FormControlBody = ({ fields, formik }) => {
    return (
        <Grid container spacing={3}>
            {fields.map((field) => {
                return <FormFieldFactory formik={formik} key={field.id} field={field}></FormFieldFactory>;
            })}
        </Grid>
    );
};

export default FormControlBody;
