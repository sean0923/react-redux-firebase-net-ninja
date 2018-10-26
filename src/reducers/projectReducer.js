import * as types from '../actions/types';
import _ from 'lodash';

const initialState = {
  projects: [
    { title: 'title1', content: 'content1' },
    { title: 'title2', content: 'content2' },
    { title: 'title3', content: 'content3' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PROJECT: {
      const projects = _.cloneDeep(state).projects.concat({ ...action.project });
      return { projects };
    }

    case types.CREATE_PROJECT_ERROR:
      return state;

    default:
      return state;
  }
};
