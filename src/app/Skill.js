import React from 'react';
import PropTypes from 'prop-types';

const getStars = (number) => {
  const stars = [];
  for (let i = 1; i <= number; i += 1) {
    const Star = <div>S</div>;
    stars.push(Star);
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
        {getStars(props.stars)}
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
