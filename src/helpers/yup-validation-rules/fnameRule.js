import { isRequired } from 'helpers/validation-rule-helper';
import * as Yup from 'yup';

const fnameRule = ({ required }) => {
    const rule = Yup.string().min(2).max(5);
    return isRequired(rule, { required });
};

export default fnameRule;