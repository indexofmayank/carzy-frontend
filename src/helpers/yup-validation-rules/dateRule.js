import { isRequired } from 'helpers/validation-rule-helper';
import * as Yup from 'yup';

const dateRule = ({ required }) => {
    const rule = Yup.date();
    return isRequired(rule, { required });
};

export default dateRule;