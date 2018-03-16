import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

const PDFBadge = ({
  pdf,
}) => {
  return (
    <a target="_blank" href={pdf.url} className="pdf-badge">
      <Logo name={pdf.icon} type="svg" />
    </a>
  );
};

PDFBadge.propTypes = {
  pdf: PropTypes.shape({
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default PDFBadge;
