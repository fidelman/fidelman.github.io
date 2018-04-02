import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Title.css';

const Title = (props) => {
  const title = props.url ? <a target="_blank" title={props.alt} href={props.url}>{props.title}</a> : props.title;

  return (
    <div className="title"><h2>{title}</h2></div>
  );
};

Title.defaultProps = {
  url: null,
  alt: null,
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default Title;
