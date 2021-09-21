import React, { Fragment } from 'react';
import Erreur404 from './Erreur';
import Footer from './Footer';

class Erreur extends React.Component {
  render() {
    return (
      <Fragment>
        <Erreur404 />
        <Footer />
      </Fragment>
    );
  }
}

export default Erreur;