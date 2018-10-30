import React from 'react';
import RenderPropsForForm from '../common/RenderProps/RenderPropsForForm';
import { connect } from 'react-redux';

import * as dataForSignup from './dataForSignup';

import * as actions from '../../actions/actions';

const SignUp = ({ authError, signUp }) => {
  return (
    <RenderPropsForForm initialFormState={dataForSignup.initialFormState}>
      {({ formState, handleOnChange }) => {
        const handleOnSubmit = e => {
          e.preventDefault();
          const { email, password, lastName, firstName } = formState;
          signUp({ userInfo: { email, password, lastName, firstName } });
        };

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

              {authError && <div className="red-text center">{authError}</div>}

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

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
  };
};

export default connect(mapStateToProps, actions)(SignUp);
