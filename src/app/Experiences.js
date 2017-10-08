import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Experience from './Experience';
import '../styles/Experiences.css';

const Experiences = (props) => {
  const { title, content } = props;

  const experiences = content.map((experience) => {
    return <Experience {...experience} key={experience.id} />;
  });

  return (
    <div>
      <Title title={title} />
      <div className="experiences">
        {experiences}
      </div>
    </div>
  );
};

Experiences.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Experiences;
