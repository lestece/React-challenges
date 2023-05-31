import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => {
            console.log('Previous state:', prevState)
            console.log('Previous props:', prevProps)
            return{
                isLoggedIn: prevState.isLoggedIn == true ? false : true
            }
        })
    }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {
            this.state.isLoggedIn ? (
                <form>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' placeholder='username'></input>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' placeholder='password'></input>
                    <button onClick={() => this.handleClick()}>Submit</button>
                </form>
            ) : (
                <button onClick={() => this.handleClick()}>login</button>
            )
        }
      </div>
    )
  }
}

export default NavBarForm