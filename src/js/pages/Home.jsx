import React from 'react';

import Swal from 'sweetalert2';

import Container from '../components/Container.jsx';
import Header from '../components/Header.jsx';
import CardProduct from '../components/product/CardProduct.jsx';

const Home = () => {
  document.title = 'Início';
  
  return (
    <>
      <Header />
      <Container>
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
                  <span>Veja nossas soluções</span>
                </a>
              </div>
            </div>
            <div className="home__container home__container--right">
              <CardProduct id='70' />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Home;