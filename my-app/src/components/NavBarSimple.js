import React, { Component } from 'react'
import css from './css/NavBarSimple.module.css'

export class NavBarSimple extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello, guest!',
         buttonText: 'login',
      }
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => {
            console.log('Previous state:', prevState)
            console.log('Previous props:', prevProps)
            return{
                message: prevState.message == 'Hello, guest!' ? 'Welcome back, user!' : 'Hello, guest!',
                buttonText: prevState.buttonText == 'login' ? 'logout' : 'login'
            }
        })
    }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <span>{this.state.message}</span>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
      </div>
    )
  }
}

export default NavBarSimple