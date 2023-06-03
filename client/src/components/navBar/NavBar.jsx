import React from 'react';
import logo from '../../images/budget.png';
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
                    <Link to='/home' className='link'>
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
                </ul>
            </nav>
            <div className="menu-hamburguesa">
                <img src={imghamb} alt="burguer menu" onClick={handelMenuHamburClick}/>
            </div>
        </div>
        <MenuBurguer />
        </> 
     );
}
 