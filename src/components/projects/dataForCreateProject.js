import _ from 'lodash';

export const initialFormState = {
  title: '',
  content: '',
};

export const ids = {
  title: 'title',
  content: 'content',
};

export const labels = {
  title: 'Title',
  content: 'Content',
};

export const types = {
  title: 'text',
  content: 'textarea',
};

export const fullData = _.keys(initialFormState).map(key => {
  return {
    id: ids[key],
    label: labels[key],
    type: types[key],
  };
});
