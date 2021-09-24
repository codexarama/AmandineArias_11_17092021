import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Tag.css';

export default class Tag extends React.Component {
  render() {
    const { tags } = this.props;

    return (
      <ul className="tag-list">
        {tags.map((tag, index) => (
          <li className="tag" key={index}>{tag}</li>
        ))}
      </ul>
    );
  }
}

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

