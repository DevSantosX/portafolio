import React, { useState } from 'react';
import '../styles/Header.css';
import { HiMenu } from "react-icons/hi";
import { FaWindowClose } from "react-icons/fa";
const Header = () => {
    const [menuShow, setMenuShow] = useState(false);
    return (
        <>
            <header className='header'>
                <div className="header__container">
                    <div className='header__brand'>
                        <h1>DevSantos</h1>
                    </div>
                    {/* <nav className='nav'>
                        <ul>
                            <li>blog</li>
                            <li>portafolio</li>
                            <li>tutoriales</li>
                            <li>acerca de</li>
                            <li>contacto</li>
                        </ul>
                    </nav> */}
                    <div className='btn__menu-mobile'>
                        {menuShow ?  <FaWindowClose onClick={() => setMenuShow(!menuShow)}/> : <HiMenu onClick={() => setMenuShow(!menuShow)}/> }
                    </div>
                    <div className={menuShow ? 'nav-mobile nav-mobile-show' : 'nav-mobile'}>
                        <nav className='menu-mobile'>
                            <ul>
                                <li>blog</li>
                                <li>portafolio</li>
                                <li>tutoriales</li>
                                <li>acerca de</li>
                                <li>contacto</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
