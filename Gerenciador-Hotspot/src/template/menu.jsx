import React from 'react'
import logo from './logo.jpg'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <img src={logo} alt="logo" />   
                </a>
            </div>

            <div className='navbar-header'>
                <ul className="nav navbar-nav">
                    <li><a href='#/home'>Link Fake 1</a></li>
                    <li><a href='#/home'>Link Fake 2</a></li>
                    <li><a href='#/home'>Link Fake 3</a></li>
                    <li><a href='#/home'>Link Fake 4</a></li>
                </ul>
            </div>
        </div>
    </nav>
)