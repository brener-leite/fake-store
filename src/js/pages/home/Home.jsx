import React from 'react';

import SectionTop from './SectionTop.jsx';
import Tipbar from './Tipbar.jsx';
import SectionProduct from './SectionProduct.jsx';
import SectionInfo from './SectionInfo';
import SectionContact from './SectionContact.jsx';
import SectionNewsletter from './SectionNewsletter';

import Container from '../../components/Container.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';


const Home = () => {
  
  return (
    <>
      <Header />
      <Container>
        <SectionTop />
        <Tipbar />
        <SectionProduct />
        <SectionInfo />
        <SectionContact />
        <SectionNewsletter />
      </Container>
      <Footer />
    </>
  );
}

export default Home;