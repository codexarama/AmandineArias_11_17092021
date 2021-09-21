import React, { Fragment } from 'react';
import Background from '../Images/aProposBanner.jpg';
import Banner from './Banner';
import Accordion from './Accordion';
import { AProposData } from '../Data/AProposData';
import Footer from './Footer';

class APropos extends React.Component {

  render() {
    return (
      <Fragment>
        <Banner src={Background} alt="Paysage" title="Nos valeurs" />
        <main>
          {AProposData.map(({ ...data }) => (
            <Accordion key={data.id} title={data.title} content={data.content} />
          ))}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default APropos;
