import React, { useState, useEffect } from 'react';

import {getProduct} from './index.js'

const Card = ({id, loading, setLoading}) => {
  const [data, setData] = useState({});

  async function connect() {
    const response = await getProduct(id);
    if(response.name) {
      setData(response);
      setLoading(2);
    }
    else {
      setLoading(1);
    }
  }

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="card">
      <div className={`loading ${(loading !== 0 && 'hide')}`}></div>
      <div className={`card__container ${loading === 0 && 'hide'}`}>
        <div className="card__image">
          <img src={data?.sprites?.front_default} alt={`Imagem do pokémon ${data?.name}`} />
        </div>
        <div className="card__button">
          <button className="button button--tertiary">
            <span className="text text--regular text--pink">Adicionar à sacola</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;