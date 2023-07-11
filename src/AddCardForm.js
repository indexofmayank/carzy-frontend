import FormControl from "./components/formfieldbuilder/FormControl";


const AddCardForm = () => {

  const formDetails = {
    "name": "add_car",
    "label": "Add My Car",
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
            "type": "required",
            "message": "this field is required"
          },
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
        "min": "",
        "max": "",
        "validationRules": [
          {
            "type": "required",
            "message": "this field is required"
          },
          {
            "type": "alpha",
            "message": "{{field}} field should be valid Name"
          }
        ]
      }
    ],
    "buttons": [
      {
        "type": "reset",
        "label": "Cancel",
        "position": ""
      },
      {
        "type": "submit",
        "label": "Add Car",
        "position": ""
      }
    ]
  }

  formDetails.onSubmit = () => {
    console.log("form got submitted");
  }

  formDetails.validationSchema = {};
  formDetails.initialValues = { fname: "", email: "" };

  return (
    <div>
      <FormControl {...formDetails} ></FormControl>
    </div>
  )
}

export default AddCardForm;