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
                placeholder: ''
            },
            {
                type: 'text',
                id: 2,
                label: 'Last name',
                value: '',
                name: 'llname',
                placeholder: '',
                required: true,
                ruleName: 'fnameRule',
                validationRules: [
                    {
                        type: 'alpha',
                        message: '{{field}} field should be valid Name'
                    },
                    // {
                    //     type: 'max',
                    //     message: '{{field}} field should be valid Name',
                    //     value: '10'
                    // }
                ]
            },

            {
                type: 'text',
                id: 3,
                label: 'Email',
                value: '',
                name: 'email',
                required: true,
                ruleName: 'emailRule',
                // validationRules: [
                //     {
                //         type: 'alpha',
                //         message: '{{field}} field should be valid Name'
                //     },
                //     {
                //         type: 'max',
                //         message: '{{field}} field should be valid Name',
                //         value: '10'
                //     }
                // ]
            },
            {
                type: 'password',
                id: 4,
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
            ,
            {
                type: 'submit',
                label: 'Add Car and new ',
                position: ''
            }
        ]
    };

    const onSubmit = (fieldValues) => {
        console.log('form got submitted');
        console.log(fieldValues);
    };

    const onReset = () => {
        console.log('form got reset');
    };

    return (
        <FormControl formDetails={formDetails} clientResetHandler={onReset} clientSubmitHandler={onSubmit}></FormControl>
    );
};

export default AddCardForm;
