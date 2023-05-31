import React from 'react'

function NavBarChild(props) {
    return (
        <div>
            {props.isLoggedIn ? (
            <div>
                <form>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' placeholder='username'></input>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' placeholder='password'></input>
                    <button onClick={() => props.handleClick()}>Submit</button>
                </form>
            </div>
            ) : (
            <button onClick={() => props.handleClick()}>login</button>
            )}
        </div>
    )
}

export default NavBarChild