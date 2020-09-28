import React, { useEffect, useState } from 'react';

import CardProduct from '../components/product/CardProduct.jsx'

import Container from '../components/Container.jsx'
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

const Search = () => {
  const [loading, setLoading] = useState(0); // loading: 0 - request is being processed, 1 - product not found, 2 - product found
  const termSearched = window.location.search.split('=')[1];

  const setVisibility = () => {

  }

  return (
    <>
      <Header />
      <Container>
        <div className="search">
          <div className="container space--vertical-56">
            <h1 className="text text--large text--pink">Resultado da busca:</h1>
            <div className={`search__result space--vertical-20 ${(loading !== 0) && 'hide'}`}>
              <div className="loading"></div>
            </div>
            <div className={`search__result space--vertical-20 ${(loading !== 1) && 'hide'}`}>
              <span className="text text--regular text--size-22">Nenhum produto foi encontrado para a seguinte pesquisa: {termSearched}</span>
            </div>
            <div className={`search__result space--vertical-20 ${(loading !== 2) && 'hide'}`}>
              <CardProduct id={termSearched} loading={loading} setLoading={setLoading} />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Search;