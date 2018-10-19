import React from 'react';
import RenderPropsForForm from '../common/RenderProps/RenderPropsForForm';

import * as dataForSignup from './dataForSignup';

const SignUp = () => {
  return (
    <RenderPropsForForm initialFormState={dataForSignup.initialFormState}>
      {({ formState, handleOnChange, handleOnSubmit }) => {
        return (
          <div className="container">
            <form onSubmit={handleOnSubmit} className="white">
              <h5 className="grey-text text-darken-3">Sign Up</h5>

              {dataForSignup.fullData.map(({ id, label, type }, field) => {
                return (
                  <div key={id} className="input-field">
                    <label htmlFor={id}>{label}</label>
                    <input type={type} id={id} onChange={handleOnChange} value={formState[field]} />
                  </div>
                );
              })}

              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
              </div>
            </form>
          </div>
        );
      }}
    </RenderPropsForForm>
  );
};

export default SignUp;
