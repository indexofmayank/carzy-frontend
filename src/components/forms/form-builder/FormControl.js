import FormControlHeader from './FormControlHeader';
import { Form, Formik } from 'formik';
import useFormControl from './useFormControl';
import FormControlFooter from './FormControlFooter';
import FormControlBody from './FormControlBody';

const FormControl = ({ formDetails, clientSubmitHandler, clientResetHandler }) => {
    const { initialValues, validationSchema, submitHandler, resetHandler } = useFormControl({
        formDetails,
        clientResetHandler,
        clientSubmitHandler
    });
    const { name, label, buttons, fields } = formDetails;
    return (
        <Formik
            onSubmit={submitHandler}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onReset={resetHandler}
            validateOnChange={false}
        >
            {(formik) => {
                return (
                    <Form>
                        <FormControlHeader name={name} label={label}></FormControlHeader>
                        <FormControlBody formik={formik} fields={fields}></FormControlBody>
                        <FormControlFooter formik={formik} buttons={buttons}></FormControlFooter>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default FormControl;
