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
                  <li>Home</li>
                  <li>Acerca de</li>
                  <li>Portafolio</li>
                  <li>Blog</li>
                  <li>Contacto</li>
              </ul>
          </nav>
      </div>
    </section>
  );
}

export default NavMobile;
