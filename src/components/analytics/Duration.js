import React from 'react';
import { connect } from 'react-redux';

class Duration extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.props.sleepInfo(this.props.date, localStorage.getItem('token'));
    }
  }

  sleepHours = () => {
    let hours_slept;

    if (this.props.sleep.sleep && this.props.sleep.sleep[0]) {
      hours_slept = Math.round(
        ((this.props.sleep.sleep[0].duration / 3600000) * 10) / 10
      );

      return hours_slept + ' hrs';
    }
  };

  render() {
    return <div id='duration'>{this.sleepHours()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    date: state.user.date,
    sleep: state.user.sleep,
    token: state.user.token
  };
};

export default connect(mapStateToProps)(Duration);