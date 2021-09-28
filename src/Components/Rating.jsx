import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Rating.css';

/**
 * Render Rating component
 * @extends Component
 * @param {object} props
 * @param {integer} props.rating > number of stars
 * @returns {Reactnode} jsx in DOM html
*/

export default class Rating extends Component {
  render() {
    const { rating } = this.props;
    const range = [1, 2, 3, 4, 5];
    return (
      <div className="rating">
        {range.map((index) =>
          rating >= index ? (
            <i key={index} className="fas fa-star full-star"></i>
          ) : (
            <i key={index} className="fas fa-star empty-star"></i>
          )
        )}
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.oneOf(['1', '2', '3', '4', '5']).isRequired,
};
