import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

const Experience = (props) => {
  return (
    <div className="experience">
      <div className="experience-logo">
        <Logo name={props.icon} alt={props.icon} type="svg" />
      </div>
      <div className="experience-content">
        <p className="experience-years">{props.years}</p>
        <p className="experience-info">{props.position}</p>
        <p className="experience-info">{props.company}</p>
        <p className="experience-info">{props.location}</p>
      </div>
    </div>
  );
};

Experience.defaultProps = {
  icon: '../gfx/laptop.svg',
};

Experience.propTypes = {
  years: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Experience;
