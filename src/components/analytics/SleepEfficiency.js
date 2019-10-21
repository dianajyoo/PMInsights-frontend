import React from 'react';
import { connect } from 'react-redux';

import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

class SleepEfficiency extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.props.sleepInfo(this.props.date, localStorage.getItem('token'));
    }
  }

  render() {
    let efficiency;

    if (this.props.sleep.sleep) {
      if (this.props.sleep.sleep[0]) {
        efficiency = this.props.sleep.sleep[0].efficiency;
      }
    }

    return (
      <div className='progress-circle'>
        <Progress
          type='circle'
          width={160}
          strokeWidth={13}
          percent={this.props.sleep.sleep ? efficiency : ''}
          theme={{
            active: {
              trailColor: 'rgb(236,236,236)',
              color: 'rgba(133,207,218)'
            }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.user.date,
    sleep: state.user.sleep,
    token: state.user.token
  };
};

export default connect(mapStateToProps)(SleepEfficiency);