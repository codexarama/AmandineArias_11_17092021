import React, { Fragment, useState } from 'react';
import { logements } from '../Data/LogementsData';

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const previousImg = () => {
    currentImg > 0 && setCurrentImg(currentImg - 1);
  };

  const nextImg = () => {
    currentImg < logements[currentImg].pictures.length - 1 &&
      setCurrentImg(currentImg + 1);
  };

  return (
    <Fragment>
      <button onClick={previousImg}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button onClick={nextImg}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <span>
        {currentImg + 1} / {logements[currentImg].pictures.length}
      </span>
      <img
        className="active"
        src={logements[currentImg].pictures}
        alt={logements[currentImg].title}
      />
    </Fragment>
  );
};

export default Carousel;

///////////////////////////////////////////////////////////////////////////

// import React, { Fragment, useState } from 'react';

// const Carousel = ({ img, alt }) => {
//   const [currentImg, setCurrentImg] = useState(0);

//   const previousImg = () => {
//     currentImg > 0 && setCurrentImg(currentImg - 1);
//   };

//   const nextImg = () => {
//     currentImg < img.length - 1 &&
//       setCurrentImg(currentImg + 1);
//   };

//   return (
//     <Fragment>
//       <button onClick={previousImg}>
//         <i className="fas fa-chevron-left"></i>
//       </button>
//       <button onClick={nextImg}>
//         <i className="fas fa-chevron-right"></i>
//       </button>
//       <span>
//         {currentImg + 1} / {img.length}
//       </span>
//       <img
//         className="active"
//         src={img[currentImg]}
//         alt={alt[currentImg + 1]}
//       />
//     </Fragment>
//   );
// };

// export default Carousel;

///////////////////////////////////////////////////////////////////////////

// import React, { Fragment, useState } from 'react';

// const Carousel = ({ img, alt }) => {
//   const [currentImg, setCurrentImg] = useState(0);

//   const previousImg = () => {
//     currentImg > 0 && setCurrentImg(currentImg - 1);
//   };

//   const nextImg = () => {
//     currentImg < img.length - 1 && setCurrentImg(currentImg + 1);
//   };

//   return (
//     <Fragment>
//       <button onClick={previousImg}>
//         <i class="fas fa-chevron-left"></i>
//       </button>
//       <button onClick={nextImg}>
//         <i class="fas fa-chevron-right"></i>
//       </button>
//       <img src={[currentImg].img} alt={alt} />

//       {/* ERROR */}
//       {/* {img.map((active, index) => {
//         return (
//           <div>
//             <img
//               className={currentImg === index ? 'active' : ''}
//               key={index}
//               src={active}
//               alt={img.title + currentImg}
//             />
//           </div>
//         );
//       })} */}
//     </Fragment>
//   );
// };

// export default Carousel;
