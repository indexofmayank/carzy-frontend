import { isRequired } from 'helpers/validation-rule-helper';
import * as Yup from 'yup';
const positiveNumberRule = ({ required }) => {
    const rule = Yup.number().positive();
    return isRequired(rule, { required });
};

export default positiveNumberRule;