import React from 'react';
import RenderPropsForForm from '../common/RenderProps/RenderPropsForForm';

import * as dataForSignin from './dataForSignin';

const SignIn = () => {
  return (
    <RenderPropsForForm initialFormState={dataForSignin.initialFormState}>
      {({ formState, handleOnChange, handleOnSubmit }) => {
        return (
          <div className="container">
            <form onSubmit={handleOnSubmit} className="white">
              <h5 className="grey-text text-darken-3">Sign In</h5>

              {dataForSignin.fullData.map(({ id, label, type }, field) => {
                return (
                  <div key={id} className="input-field">
                    <label htmlFor={id}>{label}</label>
                    <input type={type} id={id} onChange={handleOnChange} value={formState[field]} />
                  </div>
                );
              })}

              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Login</button>
              </div>
            </form>
          </div>
        );
      }}
    </RenderPropsForForm>
  );
};

export default SignIn;
