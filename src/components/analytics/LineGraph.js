import React from 'react'
import { connect } from 'react-redux'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

class LineGraph extends React.Component {
  render() {

    if (this.props.sleep.sleep) {
      console.log(this.props.sleep.sleep[0])
      const level = this.props.sleep.sleep[0].levels.data

      var data = [
        {name: '10 PM', light: level[0].seconds, rem: level[4].seconds, wake: level[8].seconds, deep: level[12].seconds, amt: 2400},
        {name: '1 AM', light: level[1].seconds, rem: level[5].seconds, wake: level[9].seconds, deep: level[13].seconds, amt: 2400},
        {name: '4 AM', light: level[2].seconds, rem: level[6].seconds, wake: level[10].seconds, deep: level[14].seconds, amt: 2400},
        {name: '7 AM', light: level[3].seconds, rem: level[7].seconds, wake: level[11].seconds, deep: level[15].seconds, amt: 2400}
      ]
    }

  	return (
    	<LineChart width={700} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey='name'/>
       <YAxis/>
       <CartesianGrid strokeDasharray='3 3'/>
       <Tooltip/>
       <Legend verticalAlign="top" height={36}/>
       <Line name="light" type="monotone" dataKey="light" stroke="#8884d8" />
       <Line name="rem" type="monotone" dataKey="rem" stroke="#82ca9d" />
       <Line name="wake" type="monotone" dataKey="wake" stroke='rgba(255,163,0)' />
       <Line name="deep" type="monotone" dataKey="deep" stroke='rgba(133,207,218)' />
      </LineChart>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sleep: state.user.sleep
  }
}

export default connect(mapStateToProps)(LineGraph)
