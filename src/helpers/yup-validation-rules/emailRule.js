import { isRequired } from 'helpers/validation-rule-helper';
import * as Yup from 'yup';

const emailRule = ({ required }) => {
    const rule = Yup.string().email();
    return isRequired(rule, { required });
};

export default emailRule;