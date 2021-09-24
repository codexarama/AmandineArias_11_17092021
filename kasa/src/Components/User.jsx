import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../Styles/User.css';

export default class User extends React.Component {
  render() {
    const { name, src } = this.props;
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1];

    return (
      <Fragment>
        <div className="user-infos">
          <p className="user-name">
            {firstName}
            <br />
            {lastName}
          </p>
          <img className="user-avatar" src={src} alt={name} />
        </div>
      </Fragment>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

