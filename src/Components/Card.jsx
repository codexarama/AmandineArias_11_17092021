import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Styles/Card.css';

/**
 * Render Card component
 * To be used with Annonces component as parent
 * @extends Component
 * @param {object} props
 * @param {string} props.id > get data linked by their id
 * @param {string} props.title > rental ad title
 * @param {string} props.cover > cover picture url
 * @returns {Reactnode} jsx injected in DOM
 */

export default class Card extends React.Component {
  render() {
    const { id, title, src } = this.props;

    return (
        <Link to={`/selection/${id}`}>
          <img className="card-background" src={src} alt={title} />
          <h2 className="card-title">{title}</h2>
        </Link>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

