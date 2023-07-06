import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <h1>Travandoz</h1>
        </div>
        <div className='searchBarDiv'>
            <div className='searchBar' >
                <span class="material-symbols-outlined">search</span>
                <input type="text" name="search" id="search" />
            </div>
        </div>
        <div className='profile'>
            <div className='loginRegister'>
                <span class="material-symbols-outlined">account_circle</span>
                <h4>Register</h4>
            </div>
            <div className='loginRegister'>
                <span class="material-symbols-outlined">account_circle</span>
                <h4>Login</h4>
            </div>
        </div>
    </header>
  )
}
