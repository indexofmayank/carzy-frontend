import useYupSchemaBuilder from '../../../hooks/useYupSchemaBuilder';

const useFormControl = ({ formDetails, clientSubmitHandler, clientResetHandler }) => {
    const initialValues = () => {
        const fields = formDetails.fields;
        const initialFieldValues = {};
        fields.forEach((item) => {
            initialFieldValues[item.name] = item.value;
        });
        return initialFieldValues;
    };

    const submitHandler = (value, actions) => {
        console.log("actions", actions);
        clientSubmitHandler(value);
        actions.resetForm();
    };

    const resetHandler = () => {
        clientResetHandler();
    };
    const validationSchema = useYupSchemaBuilder({ fields: formDetails.fields });

    return {
        initialValues: initialValues(),
        validationSchema,
        submitHandler,
        resetHandler
    };
};

export default useFormControl;
