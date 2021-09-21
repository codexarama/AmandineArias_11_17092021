import React, { useState } from 'react';

// HELP FORCOMPONENT ERROR
// https://reactjs.org/docs/lists-and-keys.html#keys

// try to fix error => ADDED : key=id
const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  console.log(props.id);

  return (
    <article key={props.id} className="accordion">
      <button
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
      >
        <span>{props.title}</span>
        <span>
          {isActive ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </span>
      </button>
      {isActive && <p className="accordion-content">{props.content}</p>}
    </article>
  );
};

export default Accordion;

// import React, { useState } from 'react';

// const Accordion = ({ id, title, content }) => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <article key={id} className="accordion">
//       <button className="accordion-title" onClick={() => setIsActive(!isActive)}>
//         <span>{title}</span>
//         <span>{isActive ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</span>
//       </button>
//       {isActive && <p key={index} className="accordion-content">{content}</p>}
//       {/* {isActive && <p className="accordion-content">{content}</p>} */}
//     </article>
//   );
// };

// export default Accordion;
