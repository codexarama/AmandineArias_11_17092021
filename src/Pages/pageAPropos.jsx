import React, { Fragment } from 'react';
import Background from '../Images/aProposBanner.jpg';
import Banner from '../Components/Banner';
import Accordion from '../Components/Accordion';
import { AProposData } from '../Data/AProposData';

/**
 * Render "A propos" page
 * @extends Component
 * @param {Object} props
 * @param {array} props.AProposData > get items data
 * @param {string} props.id > unique key to identify changed, added or removed items
 * @param {string} props.title > item title
 * @param {string} props.id > item content
 * @returns {Reactnode} jsx in DOM html
 */

export default class APropos extends React.Component {
  render() {
    return (
      <Fragment>
        <Banner src={Background} alt="Paysage" title="Nos valeurs" />
        <main>
          {AProposData.map(({ id, title, content }) => (
            <Accordion
              className="accordion"
              key={id}
              title={title}
              content={content}
            />
          ))}
          {/* {AProposData.map(({ ...data }) => (
            <Accordion
              className="accordion"
              key={data.id}
              title={data.title}
              content={data.content}
            />
          ))} */}
        </main>
      </Fragment>
    );
  }
}
