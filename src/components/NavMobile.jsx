import React, { useState } from 'react';

import { HiMenu } from "react-icons/hi";
import { FaWindowClose } from "react-icons/fa";

const NavMobile = () => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <section className='nav-mobile'>
      <div className='nav-mobile__btn'>
        {menuShow ?  <FaWindowClose onClick={() => setMenuShow(!menuShow)}/> : <HiMenu onClick={() => setMenuShow(!menuShow)}/> }
      </div>
      <div className={menuShow ? 'nav-mobile__menu nav-mobile__menu-show' : 'nav-mobile__menu'}>
          <nav className='nav-mobile__menu-content'>
              <ul>
                  <li><a onClick={() => setMenuShow(!menuShow)} href="#home">Home</a></li>
                  <li><a onClick={() => setMenuShow(!menuShow)} href="#about">Acerca de</a></li>
                  <li><a onClick={() => setMenuShow(!menuShow)} href="#projects">Portafolio</a></li>
                  <li><a onClick={() => setMenuShow(!menuShow)} href="#contact">Contacto</a></li>
              </ul>
          </nav>
      </div>
    </section>
  );
}

export default NavMobile;
