import React from 'react';

import CardProduct from '../../components/product/CardProduct.jsx';

const SectionProduct = () => {
  const mountCarousel = (length) => {
    let carousel = [];
    let item = {};
    for(let index = 1; index <= length; index++) {
      item = {
        id: Math.floor(Math.random() * 300 + 1)
      }
      carousel.push(item)
    }
    return carousel;
  }

  return (
    <section className="home__area home__area--product">
      <div className="container space--vertical-56">
        <div>
          <span className="text text--large text--green">// </span>
          <span className="text text--uppercase text--large">Nossas soluções</span>
        </div>
        <div className="carousel carousel__container">
          <ul>
            {mountCarousel(4).map((item)=> {
              return (
                <li key={item.id}>
                  <CardProduct id={item.id}/>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionProduct;