import React from 'react';

import Container from '../components/Container.jsx';
import Header from '../components/Header.jsx';
import Section from '../components/Section.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Section title='teste'/>
        <Footer />
      </Container>
    </>
  );
}

export default Home;