import React, { Component } from 'react';
import previous from '../Images/previous.svg';
import next from '../Images/next.svg';
import '../Styles/Carousel.css';
import { Fragment } from 'react/cjs/react.production.min';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImg: 0 };
  }

  // si i = 0 (première image de la liste)
  // alors i - 1 = i.length - 1 (dernière image de la liste)
  // sinon i - 1
  previousImg = () => {
    const index = this.state.currentImg;
    index === 0
      ? this.setState({ currentImg: this.props.src.length - 1 })
      : this.setState({ currentImg: index - 1 });
  };

  // si i = i.length - 1 (dernière image de la liste)
  // alors i + 1 = 0 (première image de la liste)
  // sinon i + 1
  nextImg = () => {
    const index = this.state.currentImg;
    index === this.props.src.length - 1
      ? this.setState({ currentImg: 0 })
      : this.setState({ currentImg: index + 1 });
  };

  render() {
    let currentImg = this.state.currentImg;
    let { src, alt } = this.props;

    return (
      <div className="carousel-container">
        {src.length > 1 && (
          <Fragment>
            <button className="previous" onClick={this.previousImg}>
              <img
                className="previous-icon"
                src={previous}
                alt="chevron-left"
              />
            </button>
            <button className="next" onClick={this.nextImg}>
              <img className="next-icon" src={next} alt="chevron-right" />
            </button>
            <span className="counter">
              {this.state.currentImg + 1} / {src.length}
            </span>
          </Fragment>
        )}
        <img
          className={'carousel-img'}
          src={src[currentImg]}
          alt={`${alt} ${currentImg + 1}`}
        />
      </div>
    );
  }
}
