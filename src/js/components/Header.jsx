import React from 'react';

import logo from '../../arquivos/logo-jussi.png';
import {ReactComponent as IconCart} from '../../svg/icon-cart.svg';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div><img src={logo} alt="Logo da Jüssi"/></div>
          <div className="space--horizontal-30"><a href="/" className="text text--regular">Nossas soluções</a></div>
          <div><a href="/" className="text text--regular">Conheça a Jüssi</a></div>
        </div>
        <div className="header__container">
          <div>
            <form action="">
              <input type="text" name="search" id="search" className="header__search" placeholder="Buscar"/>
            </form>
          </div>
          <div><button>Login</button></div>
          <div>
            <IconCart />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;