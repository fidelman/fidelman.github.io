import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Logo from './Logo';
import '../styles/Contacts.css';

const Experiences = (props) => {
  const { title, content } = props;

  const contacts = content.map((contact) => {
    return (
      <a target="_blank" key={contact.id} href={contact.url}>
        <Logo name={contact.logo} alt={contact.logo} type="png" />
      </a>
    );
  });

  return (
    <div>
      <Title title={title} />
      <div className="contacts">
        {contacts}
      </div>
    </div>
  );
};

Experiences.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  })).isRequired,
};

export default Experiences;
