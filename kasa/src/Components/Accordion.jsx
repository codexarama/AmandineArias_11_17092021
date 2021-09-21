import React, { useState } from 'react';
import PropTypes from 'prop-types';

// HELP FORCOMPONENT ERROR
// https://reactjs.org/docs/lists-and-keys.html#keys

// try to fix error => ADDED : key=id

const Accordion = ({ id, title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="accordion">
      <button
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
      >
        <span>{title}</span>
        <span>
          {isActive ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </span>
      </button>
      {isActive && (
        <p key={id} className="accordion-content">
          {content}
        </p>
      )}
      {/* {isActive && <p className="accordion-content">{content}</p>} */}
    </article>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired
  // content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired
};

export default Accordion;
