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
            required: true,
            ruleName: 'fnameRule',
            required_message: "Please enter proper first name"
        },
        {
            type: 'text',
            id: 2,
            label: 'Last name',
            value: '',
            name: 'llname',
            placeholder: '',
            required: true,
            ruleName: 'fnameRule'
        },

        {
            type: 'text',
            id: 3,
            label: 'Email',
            value: '',
            name: 'email',
            required: true,
            ruleName: 'emailRule',
            validation_rules: [
                {
                    type: 'min',
                    message: 'Email field should be atleast 10 chars long',
                    value: '10'
                },
                {
                    type: 'max',
                    message: 'Email field should be maximum 15 chars long',
                    value: '15'
                }
            ]
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

export default formDetails;