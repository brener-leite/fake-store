import React, { useEffect, useState } from 'react';

import {getProduct} from './index.js'

const CardProduct = ({id}) => {
  const [data, setData] = useState({});
  console.log(data)

  useEffect(() => {
    const get = getProduct(id).then((response) => setData(response));
  }, [])

  return (
    <div className="card-product space--horizontal-15 space--vertical-15">
      <div className="">
        <div className="card-product__image">
          <img src={data?.sprites?.front_default} alt={`Imagem do pokémon ${data?.name}`}/>
        </div>
        <div>
          <p className="text text--regular">{data?.name}</p>
        </div>
        <div className="space--vertical-15">
          <p className="text text--regular text--pink text--size-12">{`Altura: ${data?.height} cm, peso: ${data?.weight} g`}</p>
        </div>
        <div>
          <ul className="card-product__types">
            {data?.types?.map((slot, index) => {
              return (
                <li key={index}>
                  <span className="text text--regular text--dark-gray text--size-12">{slot?.type.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;