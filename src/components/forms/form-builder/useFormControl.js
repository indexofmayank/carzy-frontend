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

    const submitHandler = () => {
        clientSubmitHandler();
    };

    const resetHandler = () => {
        clientResetHandler();
    };
    const validationSchema = useYupSchemaBuilder({ fields: formDetails.fields });
    console.log(validationSchema);

    return {
        initialValues: initialValues(),
        validationSchema,
        submitHandler,
        resetHandler
    };
};

export default useFormControl;
