import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';

const Header = (props) => {
  const { title, status } = props;

  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <p className="header-status">{status}</p>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Header;
