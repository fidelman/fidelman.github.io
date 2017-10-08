import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

const getStars = (number, id) => {
  const stars = [];
  for (let i = 0; i < number; i += 1) {
    stars.push(<Logo name={`star-${id}`} type="svg" />);
  }

  return stars;
};

const Skill = (props) => {
  return (
    <div className="skill">
      <div className={`skill-block skill-block-${props.id}`}>
        <span>{props.name}</span>
      </div>
      <div className="skill-stars">
        {getStars(props.stars, props.id)}
      </div>
    </div>
  );
};

Skill.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default Skill;
