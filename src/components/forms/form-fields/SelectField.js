import PropTypes from 'prop-types';
import { Select, MenuItem, IconButton } from '@mui/material';
import { CloseOutlined } from '@ant-design/icons';
import withDefaultFormField from './withDefaultFormField';

const SelectField = ({ defaultField, field, formik }) => {
    const fieldName = field.name;
    const countries = [{ label: "india", value: 1 }, { label: "USA", value: 2 }, { label: "UK", value: 3 }];

    const renderValueHandler = (selectedValue) => {
        let value = <em>Fetching country.... please wait </em>;
        if (selectedValue) {
            const country = countries.find((country) => country.value === selectedValue);
            return country.label;
        }
        return value;
    }

    const resetSelectedValue = () => {
        formik.setFieldValue("country", "");
    };

    const endAdornmentJSX = <IconButton onClick={resetSelectedValue} sx={{ visibility: formik.values[fieldName] ? "visible" : "hidden" }} ><CloseOutlined /></IconButton>;

    return (
        <>
            <Select sx={{ "& .MuiSelect-iconOutlined": { display: formik.values[fieldName] ? 'none' : '' }, "&.Mui-focused .MuiIconButton-root": { color: 'primary.main' } }} endAdornment={endAdornmentJSX} {...defaultField} fullWidth displayEmpty renderValue={renderValueHandler}>
                {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
            </Select>
        </>
    );
};

SelectField.propTypes = {
    field: PropTypes.object,
    formik: PropTypes.object,
    defaultField: PropTypes.object
};

export default withDefaultFormField(SelectField);
