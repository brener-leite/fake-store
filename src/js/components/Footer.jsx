import React from 'react';

import CompanyLogo from '../../arquivos/logo-wppcompany.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <img src={CompanyLogo} alt=""/>
        </div>
        <div>
          <ul className="footer__icons">
            <li>
              <a href="https://www.facebook.com/agencia.jussi" title="Facebook da Jüssi" className="icon icon--facebook" />
            </li>
            <li className="space--horizontal-17">
              <a href="https://www.instagram.com/jussi/" title="Instagram da Jüssi" className="icon icon--instagram" />
            </li>
            <li>
              <a href="https://www.linkedin.com/company/agencia-jussi/" title="LinkedIn da Jüssi" className="icon icon--linkedin" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;