import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Skill from './Skill';
import '../styles/Skills.css';

const Experiences = (props) => {
  const { title, content } = props;

  const skills = content.map((skill) => {
    return <Skill {...skill} key={skill.id} />;
  });

  return (
    <div>
      <Title title={title} />
      <div className="skills">
        {skills}
      </div>
    </div>
  );
};

Experiences.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Experiences;
