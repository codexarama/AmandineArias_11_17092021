import React, { Fragment } from 'react';
import { logements } from '../Data/LogementsData';
import User from '../Components/User';
import Tag from '../Components/Tag';
import Rating from '../Components/Rating';
import Accordion from '../Components/Accordion';
import '../Styles/Selection.css';

class Selection extends React.Component {
  render() {
    const urlId = this.props.match.params.id;
    const current = logements.find((data) => data.id === urlId);
    const { title, location, tags, host, rating, description, equipments } =
      current;

    return (
      <Fragment>
        <header>{/* CAROUSEL */}</header>
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

export default Selection;
