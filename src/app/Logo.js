import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
  const { name, alt, type } = props;

  let logo = '';
  try {
    logo = require(`../gfx/${name}.${type}`);
  } catch (e) {
    console.warn(e);
  }

  return logo ? <img src={logo} alt={alt} /> : null;
};

Logo.defaultProps = {
  className: '',
  alt: 'logo',
  style: {},
};

Logo.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(['svg', 'png', 'jpg']).isRequired,
};

export default Logo;
