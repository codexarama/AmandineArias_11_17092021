import React, { Fragment } from 'react';
import Background from '../Images/accueilBanner.jpg'
import Banner from '../Components/Banner';
import Landing from '../Components/Annonces';
import Footer from '../Components/Footer';

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
