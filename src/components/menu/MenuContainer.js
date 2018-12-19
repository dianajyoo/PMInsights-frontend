import React from 'react'
import BurgerButton from './menu/BurgerButton'

class MenuContainer extends React.Component {

  state = {
    show: false
  }

  toggleMenu = () => {
    this.setState({
      show: !this.state.show
    })
  }

  handleMouseDown = (e) => {
    this.toggleMenu()

    console.log('clicked')
    e.stopPropagation()
  }

  render() {
    return (
      <div className='menu-container'>
        MenuContainer
        <BurgerButton onMouseDown={this.handleMouseDown} />
      </div>
    )
  }
}

export default MenuContainer
