import FormControl from "components/forms/form-builder/FormControl";
import formDetails from "fields";

const AddCardForm = () => {
    const onSubmit = (fieldValues, actions) => {
        console.log('form got submitted', actions);
    };

    const onReset = () => {
        console.log('form got reset');
    };

    return (
        <FormControl formDetails={formDetails} clientResetHandler={onReset} clientSubmitHandler={onSubmit}></FormControl>
    );
};

export default AddCardForm;
