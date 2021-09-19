import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="accordion">
      <button className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <span>{title}</span>
        <span>{isActive ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
      </button>
      {isActive && <p className="accordion-content">{content}</p>}
    </article>
  );
};

export default Accordion;
