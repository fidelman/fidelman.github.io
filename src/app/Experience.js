import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

const Experience = (props) => {
  const { title } = props;

  return (
    <div className="experience">
      <Title title={title} />
    </div>
  );
};

Experience.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Experience;
