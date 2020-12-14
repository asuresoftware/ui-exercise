import React from 'react';
import { Link } from 'react-router-dom';

//header component that will be consistent across the app
function Header(props) {

    return (
        <div id='header'>
            {/* Tittle links to the home page */}
            <Link to='/'><h1 id="tittle">Taco Finder!</h1></Link>
            {/* Link to home page */}
            <div id='header-links'>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export default Header