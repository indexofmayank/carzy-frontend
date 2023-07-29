import PropTypes from 'prop-types';

const withCommonTextFormField = (FormFieldComponent) => {
    const Sub = ({ formik, field }) => {
        const defaultFieldWithChangeHandler = { onChange: formik.handleChange };
        return (
            <div>
                <FormFieldComponent formik={formik} field={field} passFieldConfig={defaultFieldWithChangeHandler}></FormFieldComponent>
            </div>
        );
    };
    Sub.propTypes = {
        formik: PropTypes.object,
        field: PropTypes.object
    };
    return Sub;
};

withCommonTextFormField.propTypes = {
    component: PropTypes.element
};

export default withCommonTextFormField;
