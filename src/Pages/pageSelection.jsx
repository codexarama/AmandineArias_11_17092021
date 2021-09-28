import React, { Fragment } from 'react';
// import React, { Fragment, useEffect } from 'react';
import { logements } from '../Data/LogementsData';
import Carousel from "../Components/Carousel"
import User from '../Components/User';
import Tag from '../Components/Tag';
import Rating from '../Components/Rating';
import Accordion from '../Components/Accordion';
import Error from '../Pages/pageErreur'
import '../Styles/Selection.css';

// MODIFIER DYNAMIQUEMENT LE TITRE DE LA PAGE
// UNIQUEMENT AVEC COMPOSANT FONCTION
// useEffect(() => {document.title = `Kasa | Sélection`})

/**
 * Render "Selection" page
 * @extends Component
 * @param {object} props
 * @param {string} props.match.parmas.id > get selection id by matching with url id
 * @property {string} urlId > get selection id from props
 * @property {object} current > data matching with selection
 * @returns {Reactnode} jsx in DOM html
*/

export default class Selection extends React.Component {
  render() {

    const urlId = this.props.match.params.id;
    const current = logements.find((data) => data.id === urlId);
    const { pictures, title, location, tags, host, rating, description, equipments } =
      current;

    if (!current) return <Error />

    return (
      <Fragment>
        <header className="carousel">
          <Carousel src={pictures} alt={title} />
        </header>
        <main>
          <section className="selection">
            <article className="selection-infos">
              <h1 className="selection-title">{title}</h1>
              <p className="selection-location">{location}</p>
              <Tag tags={tags} />
            </article>
            <article className="user">
              <User name={host.name} src={host.picture} />
              <Rating rating={rating} />
            </article>
          </section>
          <section className="infos">
            <Accordion className="infos-descriptif" title="Description" content={description} />
            <Accordion className="infos-equipements" title="Equipements" content={equipments} />
          </section>
        </main>
      </Fragment>
    );
  }
}
