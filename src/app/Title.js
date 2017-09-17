import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Title.css';

const Title = (props) => {
  return (
    <div className="title"><h2>{props.title}</h2></div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
