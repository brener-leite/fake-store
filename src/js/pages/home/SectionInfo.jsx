import React from 'react';

import ImageJussi from '../../../arquivos/image-jussi.png';

const SectionInfo = () => {
  return (
    <section className="home__area home__area--info">
      <div className="container space--vertical-64">
        <div className="container--left">
          <span className="text text--large text--uppercase">Olá, somos a Jüssi</span>
          <div className="space--vertical-24">
            <p className="text text--regular">A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
          </div>
          <a href="https://jussi.com.br" className="button button--primary">
            <span className="text text--regular">Conheça a Jüssi</span>
          </a>
        </div>
        <div>
          <img src={ImageJussi} alt=""/>
        </div>
      </div>
    </section>
  );
}

export default SectionInfo;