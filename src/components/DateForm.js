import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'semantic-ui-react';

import '../stylesheets/DateForm.css';

class DateForm extends React.Component {
  state = {
    date: ''
  };

  handleChange = (e) => {
    this.setState({
      date: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted!');
    this.props.getDate(this.state.date);

    this.clearInput();
  };

  clearInput = () => {
    this.setState({
      date: ''
    });
  };

  render() {
    return (
      <Form className='dateForm' onSubmit={this.handleSubmit} size='large'>
        <label>DATE</label>
        <Input
          className='dateFormInput'
          type='text'
          name='date'
          placeholder='yyyy-mm-dd'
          value={this.state.date}
          onChange={this.handleChange}
        />

        <Button className='submitButton' circular icon='search' size='large' />
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.user.date
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDate: (date) => dispatch({ type: 'STORE_SLEEP_DATE', date })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateForm);