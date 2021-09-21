import React, { Fragment } from 'react';
// import aProposBg from '../Images/aProposBanner.jpg';
import Banner from './Banner';
import Accordion from './Accordion';
import { AProposData } from '../Data/AProposData';
import Footer from './Footer';

// HELP FOR COMPONENT ERROR
// https://reactjs.org/docs/lists-and-keys.html#keys

class APropos extends React.Component {

  // TEST : CHANGE TITRE PAGE "à propos" => OK !
  // state = {
  //   titre: "Coucou",
  // };

  // NE FONCTIONNE PAS : CHANGE SOURCE IMAGE (cf. captures écran)
  // state = {
  //   src: "{ aProposBg }"",
  // };

  render() {
    return (
      <Fragment>
        <Banner />

        {/* TEST : CHANGE TITRE PAGE "à propos" => OK ! */}
        {/* <Banner titre={this.state.titre} /> */}

        {/* NE FONCTIONNE PAS : CHANGE SOURCE IMAGE (cf. captures écran) */}
        {/* <Banner image={this.state.src} /> */}

        <main>
          {AProposData.map(({ ...data }) => (
            <Accordion id={data.id} title={data.title} content={data.content} />
          ))}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default APropos;
