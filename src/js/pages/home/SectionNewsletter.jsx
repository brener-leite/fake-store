import React from 'react';

import Newsletter from '../../components/newsletter/Newsletter.jsx';

const SectionNewsletter = () => {
  return (
    <section className="home__area home__area--newsletter">
      <div className="container space--vertical-136">
        <div className="newsletter__text">
          <span className="text text--large text--green">//</span>
          <p className="text text--large text--white text--uppercase">receba novidades da nossa área de produtos digitais.</p>
        </div>
        <div className="newsletter__form">
          <Newsletter />
        </div>
      </div>
    </section>
  );
}

export default SectionNewsletter;