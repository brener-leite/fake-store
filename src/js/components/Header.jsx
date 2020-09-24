import React from 'react';

import logo from '../../arquivos/logo-jussi.png';
import {ReactComponent as IconCart} from '../../svg/icon-cart.svg';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="header__area">
            <div><img src={logo} alt="Logo da Jüssi"/></div>
            <div className="space--horizontal-30"><a href="/" className="text text--regular">Nossas soluções</a></div>
            <div><a href="/" className="text text--regular">Conheça a Jüssi</a></div>
          </div>
          <div className="header__area">
            <div>
              <form action="">
                <input type="text" name="search" id="search" className="input__search text--regular text--pink" placeholder="Buscar"/>
              </form>
            </div>
            <div className="space--horizontal-30"><button>Login</button></div>
            <div>
              <button className="minicart__button" onClick={(e)=>console.log('minicart')}>
                <IconCart />
                <div className="minicart__badge">
                  <span className="minicart__number">0</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;