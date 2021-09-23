import React, { Fragment } from 'react';
import Background from '../Images/aProposBanner.jpg';
import Banner from '../Components/Banner';
import Accordion from '../Components/Accordion';
import { AProposData } from '../Data/AProposData';

export default class APropos extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner src={Background} alt="Paysage" title="Nos valeurs" />
        <main>
          {AProposData.map(({ ...data }) => (
            <Accordion
              className="accordion"
              key={data.id}
              title={data.title}
              content={data.content}
            />
          ))}
        </main>
      </Fragment>
    );
  }
}
