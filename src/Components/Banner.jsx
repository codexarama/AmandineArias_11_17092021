import React from 'react';
import PropTypes from "prop-types"
import '../Styles/Banner.css'

/**
 * Render Banner component
 * @extends Component
 * @param {object} props
 * @param {string} props.src > background picture url
 * @param {string} props.alt > picture alt text
 * @param {string} props.title > banner title (can be different or empty)
 * @returns {Reactnode} jsx injected in DOM
*/

export default class Banner extends React.Component {
  render() {

    const { src, alt, title } = this.props;

    return (
      <header className="banner">
        <h1 className="banner-title">{title}</h1>
        <img
          className="banner-background"
          src={src}
          alt={alt}
        ></img>
      </header>
    );
  }
}

Banner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
};

