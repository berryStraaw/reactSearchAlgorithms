import React from 'react';
import '../styles/Nav.css';
import {Link} from 'react-router-dom';

const Nav=()=>{

    const navStyle={
        color:"#53DD6C",
        textDecoration: "none"
    };

    return(
        <nav>
            <Link to='/' style={navStyle}>
                <li>Home</li>
            </Link>

            <ul className='nav-list'>
                <Link to='/knight' style={navStyle}>
                    <li>Knight Traveils</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;