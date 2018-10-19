import { Component } from 'react';

class RenderPropsForForm extends Component {
  state = {
    ...this.props.initialFormState,
  };

  handleOnChange = e => {
    const { id, value } = e.target;
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
      formState: { ...state },
      handleOnChange,
      handleOnSubmit,
    });
  }
}

export default RenderPropsForForm;
