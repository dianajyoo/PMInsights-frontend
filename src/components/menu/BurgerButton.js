import React from 'react'
import '../BurgerButton.css'

const BurgerButton = props => {
  return (
    <div className='burger'>
      <button type='button' id='burger-btn' onMouseDown={e => props.onMouseDown(e)}></button>
    </div>
  )
}

export default BurgerButton
