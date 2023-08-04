// const isRequired = (yupObject, { required }) => {
//     return required ? yupObject.required() : yupObject.nullable();
// };

// const buildSchemaByValidationRules = (yupSchemaObject, fieldDetail) => {
//     fieldDetail?.validationRules?.forEach((ruleDetail) => {
//         switch (ruleDetail.type) {
//             case 'min':
//                 yupSchemaObject = yupSchemaObject.min(ruleDetail.value, ruleDetail.message);
//                 break;
//             case 'max':
//                 yupSchemaObject = yupSchemaObject.max(ruleDetail.value, ruleDetail.message);
//                 break;
//             default:
//                 break;
//         }
//     });
//     return yupSchemaObject;
// };

// export { buildSchemaByValidationRules, isRequired };

// validation rule pattern
// 1) required / optional
// 2) pre defined rule
// 3) some ThemeCustomization
// 4) regular expression