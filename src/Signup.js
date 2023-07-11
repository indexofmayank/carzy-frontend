import FieldBuilder from "./components/formfieldbuilder/FieldBuilder";

const Signup = () => {

  const fields = [
    {
      "type": "text",
      "id": "1",
      "label": "First name",
      "value": "",
      "name": "fname",
      "placeholder": "This is placeholder",
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
      "type": "password",
      "id": "2",
      "label": "Password",
      "name": "password",
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
  ]

  return (
    <div>
      {fields.map((field) => {
        return (
          <FieldBuilder key={field.id} {...field} />
        );
      })}
    </div>

  );
}

export default Signup;