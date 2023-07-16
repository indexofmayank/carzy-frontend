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
        "validationRules": [
          {
            "type": "alpha",
            "message": "{{field}} field should be valid Name"
          },
          {
            "type": "min",
            "message": "{{field}} field should be valid Name",
            "value": 3
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
        "validationRules": [
          {
            "type": "email",
            "message": "{{field}} must be a valid email address"
          }
        ]
      },
      {
        "type": "number",
        "id": 3,
        "label": "Age",
        "name": "age",
        "value": "",
        "required": false,
        "validationRules": [
          {
            "type": "min",
            "message": "{{field}} must be greater than 3",
            "value":10
          },
          {
            "type": "max",
            "message": "{{field}} must be a valid email address",
            "value":100
          }
        ]
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
  }

  const onReset = () => {
    console.log("form got reset");
  }

  return (
    <div>
      <FormControl formDetails={formDetails} clientResetHandler={onReset} clientSubmitHandler={onSubmit}></FormControl>
    </div>
  )
}

export default AddCardForm;