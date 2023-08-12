import { Formik } from 'formik';
import useFormControl from './useFormControl';
import FormControlBody from './FormControlBody';
import { Grid } from '@mui/material';
import FormCard from 'components/FormCard';

const FormControl = ({ formDetails, clientSubmitHandler, clientResetHandler }) => {
    const { initialValues, validationSchema, submitHandler, resetHandler } = useFormControl({
        formDetails,
        clientResetHandler,
        clientSubmitHandler
    });
    const { label, buttons, fields } = formDetails;
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Formik
                    onSubmit={submitHandler}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onReset={resetHandler}
                    validateOnChange={false}
                >
                    {(formik) => {
                        return (
                            <FormCard title={label} codeHighlight contentSX={{ pl: 12.25, pr: 12.25, minHeight: 'calc(100vh - 320px)' }} formik={formik} buttons={buttons}>
                                <FormControlBody formik={formik} fields={fields}></FormControlBody>
                            </FormCard>
                        );
                    }}
                </Formik>
            </Grid>
        </Grid>
    );
};

export default FormControl;
