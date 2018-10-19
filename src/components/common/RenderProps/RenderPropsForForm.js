import React, { Component } from 'react';

class RenderPropsForForm extends Component {
  state = {
    ...this.props.initialFormState,
  };

  handleOnChange = e => {
    const { id, value } = e;
    this.setState({ [id]: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    console.log('this.state: ', this.state);
  };

  render() {
    const { children } = this.props;
    const { state, handleOnChange, handleOnSubmit } = this;

    return children({
      ...state,
      handleOnChange,
      handleOnSubmit,
    });
  }
}

export default RenderPropsForForm;
