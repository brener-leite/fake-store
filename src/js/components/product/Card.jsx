import React, { useState, useEffect } from 'react';

import {getProduct} from './index.js'

const Card = ({id}) => {
  const [data, setData] = useState({});

  async function connect() {
    const response = await getProduct(id);
    setData(response);
  }

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="card card__container">
      <div className="card__image">
        <img src={data?.sprites?.front_default} alt={`Imagem do pokémon ${data?.name}`} />
      </div>
      <div className="card__button">
        <button className="button button--tertiary">
          <span className="text text--regular text--pink">Adicionar à sacola</span>
        </button>
      </div>
    </div>
  );
}

export default Card;