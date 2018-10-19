import _ from 'lodash';

export const initialFormState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

export const labels = {
  email: 'Email',
  password: 'Password',
  firstName: 'First Name',
  lastName: 'Last Name',
};

export const ids = {
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  lastName: 'lastName',
};

export const types = {
  email: 'email',
  password: 'password',
  firstName: 'text',
  lastName: 'text',
};

export const fullData = _.keys(initialFormState).map(key => {
  return {
    id: ids[key],
    label: labels[key],
    type: types[key],
  };
});
