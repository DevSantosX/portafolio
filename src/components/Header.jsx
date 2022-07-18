import React from 'react';
import NavMobile from './NavMobile';
const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="header__container">
                    <div className='header__brand'>
                        <h1>DevSantos</h1>
                    </div>
                    <nav className='header__nav'>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">Acerca de</a></li>
                            <li><a href="#projects">Portafolio</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </nav>
                    <NavMobile/>
                </div>
            </header>
        </>
    );
}

export default Header;
