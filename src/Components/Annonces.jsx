import React from 'react';
import Card from '../Components/Card';
import { logements } from '../Data/LogementsData';
import '../Styles/Annonces.css';

/**
 * Render Annonces component
 * To be used with Card component as child
 * @extends Component
 * @param {object} props
 * @param {string} props.id > unique key to identify changed, added or removed items
 * @param {string} props.id > get selection data by its id
 * @param {string} props.title > rental ad title
 * @param {string} props.cover > cover picture url
 * @param {array} rental ad data
 * @returns {Reactnode} jsx injected in DOM
 */

export default class Annonces extends React.Component {
  render() {
    return (
      <main className="annonces">
        {logements.map(({ id, title, cover }) => (
          <article className="card" key={id}>
            <Card id={id} title={title} src={cover} />
          </article>
        ))}
      </main>
    );
  }
}
