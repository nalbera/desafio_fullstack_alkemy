import React from 'react';
import logo from '../../images/budget.png';
import genericUser from '../../images/users/generic_user.png';
import imghamb from '../../images/hamb-menu.svg';
import { Link } from 'react-router-dom';
import MenuBurguer from '../menuBurguer/MenuBurguer';

import './navbar.css';

export const NavBar = () => {

    const handelMenuHamburClick = () => {
        const menu = document.querySelector('.burguer-container');
        menu.style.display = 'flex';
    }

    return (
        <>
        <div className='navBar'>
            <div className="logo">
                <img src={ logo } alt="logo" />
            </div>
            <nav>
                <ul className='nav-link'>
                    <Link to='/' className='link'>
                        <li>Home</li>
                    </Link>
                    <Link to='/new-budget' className='link'>
                        <li>New Budget</li>
                    </Link>
                    <Link to={`/list-status/${1}`} className='link'>
                        <li>Income</li>
                    </Link>
                    <Link to={`/list-status/${2}`} className='link'>
                        <li>Bills</li>
                    </Link>
                    <Link to={'/register'} className='link'>
                        <li>Register</li>
                    </Link>
                </ul>
            </nav>
            <div className='user'>
                <img src={genericUser} alt="" />
            </div>
            <div className="menu-hamburguesa">
                <img src={imghamb} alt="burguer menu" onClick={handelMenuHamburClick}/>
            </div>
        </div>
        <MenuBurguer />
        </> 
     );
}
 