import React, { Fragment } from 'react';
import Banner from './Banner';
import Landing from './Landing';
import Footer from './Footer';

class Accueil extends React.Component {
  render() {
    return (
      <Fragment>
      {/* <div> */}
        <Banner />
        <Landing />
        <Footer />
      {/* </div> */}
      </Fragment>
    );
  }
}

export default Accueil;
