import React from 'react'

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export default class SleepContainer extends React.Component {
  render() {
    return (
      <div>
        <div className='progress-circle'>
          <Progress
            type="circle"
            width={300}
            strokeWidth={10}
            percent={75}
          /><br /><br />
          Sleep Efficiency
        </div>
      </div>
    )
  }
}
