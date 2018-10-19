import _ from 'lodash';

export const initialFormState = {
  email: '',
  password: '',
};

export const ids = {
  email: 'email',
  password: 'password',
};

export const labels = {
  email: 'Email',
  password: 'Password',
};

export const types = {
  email: 'email',
  password: 'password',
};

export const fullData = _.keys(initialFormState).map(key => {
  return {
    id: ids[key],
    label: labels[key],
    type: types[key],
  };
});
