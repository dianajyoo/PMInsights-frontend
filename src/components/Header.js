import React from 'react';
import DateForm from './DateForm';
import { connect } from 'react-redux';

import '../stylesheets/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <p className='headerItem'>PM Insights</p>
        <div className='headerItem'>{this.props.date}</div>
        <div className='dateInput'>
          <DateForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.user.date
  };
};

export default connect(mapStateToProps)(Header);