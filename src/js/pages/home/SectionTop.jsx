import React, { useState } from 'react';

import Swal from 'sweetalert2';

import Card from '../../components/product/Card.jsx';

const SectionTop = () => {
  const [loading, setLoading] = useState(0); // loading: 0 - request is being processed, 1 - product not found, 2 - product found

  return (
    <section className="home__area home__area--top">
      <div className="container home__container">
        <div className="home__container home__container--left home__container--column">
          <div className="home__text-floating">
            <p className="text text--extra-large text--white">//</p>
          </div>
          <div>
            <p className="text text--extra-large text--uppercase">Criamos<br/> lojas que<br/> vendem mais.</p>
          </div>
          <div className="space--vertical-15">
            <p className="text text--regular">A Jüssi é especialista na criação de lojas<br/> usando a plataforma VTEX. Precisa criar sua<br/> loja ou migrar de plataforma?</p>
          </div>
          <div className="space--vertical-15">
            <a href="#" className="button button--primary" onClick={(e) => Swal.fire({icon: "question", title: "Oops...", text:"Where should I carry you to? Layout doesn't make it clear"})}>
              <span className="text text--regular">Veja nossas soluções</span>
            </a>
          </div>
        </div>
        <div className="home__container home__container--right">
          <div className="home__card home__card--first">
            <Card id={Math.floor(Math.random() * 200 + 1)} loading={loading} setLoading={setLoading}/>
          </div>
          <div className="home__card home__card--second">
            <Card id={Math.floor(Math.random() * 100 + 1)} loading={loading} setLoading={setLoading}/>
          </div>
          <div className="home__card home__card--third">
            <Card id={Math.floor(Math.random() * 100 + 1)} loading={loading} setLoading={setLoading}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTop;