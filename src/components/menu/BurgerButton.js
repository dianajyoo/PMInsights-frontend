import React from 'react'
import '../../styling/BurgerButton.css'

import { Button } from 'semantic-ui-react'

const BurgerButton = (props) => {
  return (
    <div id='bars-container' onMouseDown={e => {props.handleMouseDown(e)}}>
      <Button id ='bars' circular icon='bars' size='huge' />
    </div>
  )
}

export default BurgerButton

// <i id='menu-icon' class="bars icon"></i>
// <button type='button' id='menu-icon' onMouseDown={e => props.handleMouseDown(e)}></button>
// <img src={menu} alt='icon' className='menu-icon' onMouseDown={e => {props.handleMouseDown(e)}} />
