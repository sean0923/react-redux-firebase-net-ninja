import React from 'react';
import RenderPropsForForm from '../common/RenderProps/RenderPropsForForm';

import * as dataForCreateProject from './dataForCreateProject';

const CreateProject = () => {
  return (
    <RenderPropsForForm initialFormState={dataForCreateProject.initialFormState}>
      {({ formState, handleOnChange, handleOnSubmit }) => {
        return (
          <div className="container">
            <form onSubmit={handleOnSubmit} className="white">
              <h5 className="grey-text text-darken-3">Create New Post</h5>

              {dataForCreateProject.fullData.map(({ id, label, type }, field) => {
                console.log('type: ', type);
                if (type === 'textarea') {
                  return (
                    <div key={id} className="input-field">
                      <label htmlFor={id}>{label}</label>
                      <textarea
                        className="materialize-textarea"
                        type={type}
                        id={id}
                        onChange={handleOnChange}
                        value={formState[field]}
                      />
                    </div>
                  );
                }

                return (
                  <div key={id} className="input-field">
                    <label htmlFor={id}>{label}</label>
                    <input type={type} id={id} onChange={handleOnChange} value={formState[field]} />
                  </div>
                );
              })}

              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Submit</button>
              </div>
            </form>
          </div>
        );
      }}
    </RenderPropsForForm>
  );
};

export default CreateProject;
