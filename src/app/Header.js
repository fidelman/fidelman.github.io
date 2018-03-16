import React from 'react';
import PropTypes from 'prop-types';
import PDFBadge from './PDFBadge';
import '../styles/Header.css';

const Header = ({
  title,
  status,
  pdf,
}) => {
  return (
    <header className="header">
      <PDFBadge pdf={pdf} />
      <h1 className="header-title">{title}</h1>
      <p className="header-status">{status}</p>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  pdf: PropTypes.object.isRequired,
};

export default Header;
