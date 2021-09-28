import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Tag.css';

/**
 * Render Tags component
 * @extends Component
 * @param {object} props
 * @param {array} props.tags > get tag text from corresponding data
 * @param {string} props.id > unique key to identify changed, added or removed items
 * @returns {Reactnode} jsx in DOM html
*/

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

