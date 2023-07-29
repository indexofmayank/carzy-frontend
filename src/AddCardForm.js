import FormControl from './components/forms/form-builder/FormControl';

const AddCardForm = () => {
    const formDetails = {
        name: 'brand',
        label: 'Brand',
        fields: [
            {
                type: 'text',
                id: 1,
                label: 'First name',
                value: '',
                name: 'fname',
                placeholder: '',
                required: true,
                ruleName: 'fnameRule',
                validationRules: [
                    {
                        type: 'alpha',
                        message: '{{field}} field should be valid Name'
                    },
                    {
                        type: 'max',
                        message: '{{field}} field should be valid Name',
                        value: '10'
                    }
                ]
            },
            {
                type: 'password',
                id: 2,
                label: 'Password',
                name: 'password',
                value: '',
                required: false,
                ruleName: 'passwordRule'
            }
        ],
        buttons: [
            {
                type: 'reset',
                label: 'Reset',
                position: ''
            },
            {
                type: 'submit',
                label: 'Add Car',
                position: ''
            }
        ]
    };

    const onSubmit = () => {
        console.log('form got submitted');
    };

    const onReset = () => {
        console.log('form got reset');
    };

    return (
        <div>
            <FormControl formDetails={formDetails} clientResetHandler={onReset} clientSubmitHandler={onSubmit}></FormControl>
        </div>
    );
};

export default AddCardForm;
