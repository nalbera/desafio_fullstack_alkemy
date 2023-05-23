import React from 'react';
import { Link } from 'react-router-dom';
import './menuburguer.css';
import close from '../../images/close.svg';

const MenuBurguer = () => {

    const handelCloseClick = () => {
        const menu = document.querySelector('.burguer-container');
        menu.style.display = 'none';
    }

    return (
        <div className='burguer-container'>
            <nav className='burguer-container_nav'>
                <div className='img-close'>
                    <img src={ close } alt="" onClick={handelCloseClick}/>
                </div>
                <ul className='burguer-container_nav-link'>
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
                </ul>
            </nav>
        </div>
    );
}

export default MenuBurguer;
