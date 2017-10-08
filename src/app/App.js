import React from 'react';
import Header from './Header';
import Experiences from './Experiences';
import data from '../data';

const App = () => {
  const { header, experience } = data;

  return (
    <div>
      <Header title={header.title} status={header.status} />
      <Experiences title={experience.title} content={experience.content} />
    </div>
  );
};

export default App;
