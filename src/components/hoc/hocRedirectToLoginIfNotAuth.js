import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function(ComposedComponent) {
  class HOC_Wrapper extends Component {
    render() {
      return this.props.auth.uid ? (
        <ComposedComponent {...this.props} />
      ) : (
        <Redirect to="/signin" />
      );
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.firebase.auth,
    };
  };

  return connect(mapStateToProps)(HOC_Wrapper);
}
