import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/User.css';

class User extends React.Component {
  render() {
    const { name, src } = this.props;
    const firstName = name.split('')[0];
    const lastName = name.split('')[1];

    return (
      <section className="user">
        <article className="user-name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </article>
        <img className="user-avatar" src={src} alt={name} />
      </section>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default User;
