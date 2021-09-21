import React, { Fragment } from 'react';
import Background from '../Images/accueilBanner.jpg'
import Banner from './Banner';
import Landing from './Landing';
import Footer from './Footer';

class Accueil extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner src={Background} alt="Paysage" title="Chez vous, partout et ailleurs" />
        <Landing />
        <Footer />
      </Fragment>
    );
  }
}

export default Accueil;
