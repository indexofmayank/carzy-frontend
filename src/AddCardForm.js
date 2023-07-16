import FormControl from "./components/form-builder/FormControl";

const AddCardForm = () => {

  const formDetails = {
    "name": "brand",
    "label": "Brand",
    "fields": [
      {
        "type": "text",
        "id": 1,
        "label": "First name",
        "value": "",
        "name": "fname",
        "placeholder": "",
        "required": true,
        "ruleName": "fnameRule",
        "validationRules": [
          {
            "type": "alpha",
            "message": "{{field}} field should be valid Name"
          },
          {
            "type": "max",
            "message": "{{field}} field should be valid Name",
            "value": "10"
          }
        ]
      },
      {
        "type": "text",
        "id": 2,
        "label": "Email",
        "name": "email",
        "value": "",
        "required": false,
        "ruleName": "emailRule"
      },
      {
        "type": "number",
        "id": 3,
        "label": "Age",
        "name": "age",
        "value": "",
        "required": true,
        "validationRules": [
          {
            "type": "min",
            "message": "{{field}} must be greater than 3",
            "value": 10
          },
          {
            "type": "max",
            "message": "{{field}} must be a valid email address",
            "value": 100
          },
          {
            "type": "max",
            "message": "{{field}} must be a valid email address",
            "value": 50
          }
        ]
      },
      {
        "type": "checkbox",
        "id": 4,
        "label": "Remember me",
        "name": "remember",
        "value": false,
        "required": true,
        "ruleName": "boolRule"
      }
    ],
    "buttons": [
      {
        "type": "reset",
        "label": "Reset",
        "position": ""
      },
      {
        "type": "submit",
        "label": "Add Car",
        "position": ""
      }
    ]
  }

  const onSubmit = () => {
    console.log("form got submitted");
  };

  const onReset = () => {
    console.log("form got reset");
  };

  return (
    <div>
      <FormControl formDetails={formDetails} clientResetHandler={onReset} clientSubmitHandler={onSubmit}></FormControl>
    </div>
  )
};

export default AddCardForm;