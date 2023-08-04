import { isRequired } from 'helpers/validation-rule-helper';
import * as Yup from 'yup';

const passwordRule = ({ required }) => {
    const rule = Yup.string()
        .min(6, 'Password is too short - should be 8 chars minimum.')
        .max(16, 'Password is too big - should be 16 chars long.');
    return isRequired(rule, { required });
};

export default passwordRule;