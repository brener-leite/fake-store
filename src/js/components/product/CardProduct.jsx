import React, { useEffect, useState } from 'react';

import {getProduct} from './index.js'
import {convertUnity} from '../../utils/index.js';

const CardProduct = ({id, loading, setLoading}) => {
  // loading: 0 - request is being processed, 1 - product not found, 2 - product found
  const [data, setData] = useState({});

  const METERS_TO_FOOTS = 3.281;
  const KILOGRAM_TO_POUNDS = 2.205;

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
    <div className="card-product space--horizontal-15 space--vertical-15">
      <div className={`loading ${(loading !== 0 && 'hide')}`}></div>
      <div className={`card-product__container ${loading === 0 && 'hide'}`}>
        <div className="card-product__image">
          <img src={data?.sprites?.front_default} alt={`Imagem do pokémon ${data?.name}`}/>
        </div>
        <div>
          <p className="text text--capitalize text--regular">{data?.name}</p>
        </div>
        <div className="space--vertical-15">
          <p className="text text--regular text--pink text--size-12">{`Altura: ${convertUnity(data?.height, METERS_TO_FOOTS)} m, peso: ${convertUnity(data?.weight, KILOGRAM_TO_POUNDS)} kg`}</p>
        </div>
        <div className="card-product__types">
          <ul>
            {data?.types?.map((slot, index) => {
              return (
                <li key={index}>
                  <span className="text text--regular text--dark-gray text--size-12">{slot?.type.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="card-product__button">
          <a href="#" className="button button--secondary">
            <span className="text text--regular">Ver solução</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;