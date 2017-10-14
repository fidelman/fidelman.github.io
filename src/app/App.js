import React, { Component } from 'react';
import * as firebase from 'firebase';
import Header from './Header';
import Experiences from './Experiences';
import Skills from './Skills';
import Contacts from './Contacts';

class App extends Component {
  state = {
    header: {},
    experience: {},
    skills: {},
    contacts: {},
    render: false,
  };

  componentDidMount() {
    const rootRef = firebase.database().ref().child('db');

    rootRef.on('value', (db) => {
      this.setState({
        ...db.val(),
        render: true,
      });
    });
  }

  render() {
    const { header, experience, skills, contacts, render } = this.state;

    if (!render) return null;

    return (
      <div>
        <Header title={header.title} status={header.status} />
        <Experiences title={experience.title} content={experience.content} />
        <Skills title={skills.title} content={skills.content} />
        <Contacts title={contacts.title} content={contacts.content} />
      </div>
    );
  }
}

export default App;
