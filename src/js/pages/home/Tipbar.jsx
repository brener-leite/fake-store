import React from 'react';

import logoBrastemp from '../../../arquivos/logo-brastemp.png';
import logoCompra from '../../../arquivos/logo-compra.png';
import logoConsul from '../../../arquivos/logo-consul.png';
import logoThebar from '../../../arquivos/logo-thebar.png';

const Tipbar = () => (
  <div className="tipbar">
    <div className="container tipbar__container">
      <div>
        <span>Nossas principais lojas VTEX</span>
      </div>
      <div>
        <span>→</span>
      </div>
      <a className="tipbar__logo" href="https://www.brastemp.com.br/">
        <img src={logoBrastemp} alt="Logo da Brastemp"/>
      </a>
      <a className="tipbar__logo"  href="https://www.compracerta.com.br/">
        <img src={logoCompra} alt="Logo do Compra Certa"/>
      </a>
      <a className="tipbar__logo"  href="https://loja.consul.com.br/">
        <img src={logoConsul} alt="Logo da Consul"/>
      </a>
      <a className="tipbar__logo"  href="https://br.thebar.com/">
        <img src={logoThebar} alt="Logo da The Bar"/>
      </a>
    </div>
  </div>
);

export default Tipbar;