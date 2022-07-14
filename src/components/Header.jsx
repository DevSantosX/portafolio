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
                    {/* <nav className='nav'>
                        <ul>
                            <li>blog</li>
                            <li>portafolio</li>
                            <li>tutoriales</li>
                            <li>acerca de</li>
                            <li>contacto</li>
                        </ul>
                    </nav> */}
                    <NavMobile/>
                </div>
            </header>
        </>
    );
}

export default Header;
