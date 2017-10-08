import React from 'react';
import Header from './Header';
import Experiences from './Experiences';
import Skills from './Skills';
import Contacts from './Contacts';
import data from '../data';

const App = () => {
  const { header, experience, skills, contacts } = data;

  return (
    <div>
      <Header title={header.title} status={header.status} />
      <Experiences title={experience.title} content={experience.content} />
      <Skills title={skills.title} content={skills.content} />
      <Contacts title={contacts.title} content={contacts.content} />
    </div>
  );
};

export default App;
