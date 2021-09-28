import React, { Component } from 'react';
import previous from '../Images/previous.svg';
import next from '../Images/next.svg';
import '../Styles/Carousel.css';
import { Fragment } from 'react/cjs/react.production.min';

/**
 * Render Carousel component
 * @extends Component
 * @param {object} props
 * @param {Array} props.src > display picture from data
 * @property {object} state > get the index of the current picture
 * @property {integer} handle navigation between slides from current index
 * @property {string} props.alt > update alt text
 * @returns {Reactnode} jsx injected in DOM
 */

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImg: 0 };
  }

  /**
   * handle click on PREVIOUS BUTTON
   * if currentImg is the first one, nav to the last one.
   * else nav to the previous one
   */

  previousImg = () => {
    const index = this.state.currentImg;
    index === 0
      ? this.setState({ currentImg: this.props.src.length - 1 })
      : this.setState({ currentImg: index - 1 });
  };

  /**
   * handle click on NEXT BUTTON
   * if currentImg is the last one, nav to the first one
   * else nav to the next one
   */

  nextImg = () => {
    const index = this.state.currentImg;
    index === this.props.src.length - 1
      ? this.setState({ currentImg: 0 })
      : this.setState({ currentImg: index + 1 });
  };

  render() {
    let currentImg = this.state.currentImg;
    let { src, alt } = this.props;

    /**
     * if only one media in the array
     * no render for previous & next button
     */

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
