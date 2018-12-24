import React from 'react'
import Menu from './Menu'
import BurgerButton from './BurgerButton'

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

    e.stopPropagation()
  }

  render() {
    return (
      <div className='menu-container'>
        <BurgerButton handleMouseDown={this.handleMouseDown} />
        <Menu handleMouseDown={this.handleMouseDown} show={this.state.show} />
      </div>
    )
  }
}

export default MenuContainer
