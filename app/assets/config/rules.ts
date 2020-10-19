import { nameReg } from '#assets/utils/constant';

export const hostRulesFn = intl => [
  {
    required: true,
    message: intl.get('formRules.hostRequired'),
  },
];

export const usernameRulesFn = intl => [
  {
    required: true,
    message: intl.get('formRules.usernameRequired'),
  },
];

export const passwordRulesFn = intl => [
  {
    required: true,
    message: intl.get('formRules.passwordRequired'),
  },
];

export const nodeIdRulesFn = intl => [
  {
    required: true,
    message: intl.get('formRules.idRequired'),
  },
  {
    pattern: /^([-\d\d]+)*(\n[-\d\d]+)*(\n)*$/,
    message: intl.get('formRules.nodeIdError'),
  },
];

export const nameRulesFn = intl => [
  {
    required: true,
    message: intl.get('formRules.nameRequired'),
  },
  {
    pattern: nameReg,
    message: intl.get('formRules.nameValidate'),
  },
];

export const numberRulesFn = intl => [
  {
    pattern: /^[1-9]\d*$/g,
    message: intl.get('formRules.numberRequired'),
  },
];

export const replicaRulesFn = (intl, activeMachineNum) => [
  {
    pattern: /^[1-9]\d*$/g,
    message: intl.get('formRules.numberRequired'),
  },
  {
    validator(_rule, value, callback) {
      if (value && Number(value) > activeMachineNum) {
        callback(
          intl.get('formRules.replicaLimit', { number: activeMachineNum }),
        );
      }
      callback();
    },
  },
];
