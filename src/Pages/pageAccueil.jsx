import React, { Fragment } from 'react';
import Background from '../Images/accueilBanner.jpg'
import Banner from '../Components/Banner';
import Rental from '../Components/Annonces';
import Footer from '../Components/Footer';

export default class Accueil extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner src={Background} alt="Paysage" title="Chez vous, partout et ailleurs" />
        <Rental />
        <Footer />
      </Fragment>
    );
  }
}
