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
            rule_name: 'fnameRule',
            required_message: "Please enter proper first name",
            // validation_rules: [
            //     {
            //         type: 'minChars',
            //         message: 'value must be less than 1',
            //         value: '3'
            //     }
            // ]
        },
        {
            type: 'text',
            id: 2,
            label: 'Last name',
            value: '',
            name: 'llname',
            placeholder: '',
            required: true,
            rule_name: 'fnameRule'
        },

        {
            type: 'text',
            id: 3,
            label: 'Email',
            value: '',
            name: 'email',
            required: true,
            rule_name: 'emailRule',
            // validation_rules: [
            //     {
            //         type: 'minChars',
            //         message: 'Email field should be atleast 10 chars long',
            //         value: '10'
            //     },
            //     {
            //         type: 'maxChars',
            //         message: 'Email field should be maximum 15 chars long',
            //         value: '15'
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
            rule_name: 'passwordRule'
        },
        {
            type: 'select',
            id: 5,
            label: 'Country',
            value: '',
            name: 'country',
            required: true
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