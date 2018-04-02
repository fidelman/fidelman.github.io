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
      <Title title={title} alt="More info on stackshare.io" url="https://embed.stackshare.io/stacks/embed/22460bb3beaf9e3873143f1391ea35" />
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
