const useFormControl = ({ formDetails, clientSubmitHandler, clientResetHandler }) => {

    const initialValues = () => {
        const fields = formDetails.fields;
        const initialFieldValues = {};
        fields.forEach(item => {
            initialFieldValues[item.name] = item.value;
        });
        return initialFieldValues;
    }

    const submitHandler = (submittedValues) => {
        console.log(submittedValues);
        clientSubmitHandler();
    }

    const resetHandler = () => {
        clientResetHandler();
    }

    return {
        initialValues: initialValues(),
        submitHandler,
        resetHandler
    };
}

export default useFormControl;