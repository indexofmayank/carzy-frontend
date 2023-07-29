import PropTypes from 'prop-types';

const withCommonFormField = (FormFieldComponent) => {
    const Sub = ({ formik, field, passFieldConfig }) => {
        let { name, label, type } = field;
        const defaultField = {
            name,
            type,
            label,
            value: formik.values[name],
            error: formik.touched[name] && Boolean(formik.errors[name]),
            helperText: formik.touched[name] && formik.errors[name],
            ...passFieldConfig
        };
        return (
            <div>
                <FormFieldComponent formik={formik} field={field} defaultField={defaultField}></FormFieldComponent>
            </div>
        );
    };
    Sub.propTypes = {
        formik: PropTypes.object,
        field: PropTypes.object,
        passFieldConfig: PropTypes.object
    };
    return Sub;
};

withCommonFormField.propTypes = {
    component: PropTypes.element
};

export default withCommonFormField;
