import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
        return(

            <div className="header-container">
                <Link to='/'>
                    Houser
                </Link>

            </div>


        )

    
}

export default Header;