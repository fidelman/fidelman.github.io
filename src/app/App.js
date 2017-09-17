import React from 'react';
import Header from './Header';
import Experience from './Experience';
import data from '../data';

const App = () => {
  const { header, experience } = data;

  return (
    <div>
      <Header title={header.title} status={header.status} />
      <Experience title={experience.title} />
    </div>
  );
};

export default App;
