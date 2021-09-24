import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Accordion.css';

const Accordion = ({ className, id, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={className}>
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>
          {isOpen ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </span>
      </button>

      {isOpen && typeof content !== 'string' && (
        <ul key={id} className="accordion-content">
          <li>{content}</li>
        </ul>
      )}

      {isOpen && typeof content === 'string'&& (
        <p key={id} className="accordion-content">
          {content}
        </p>
      )}
    </article>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  // content: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.arrayOf(PropTypes.string),
  // ]).isRequired,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired
};

export default Accordion;
