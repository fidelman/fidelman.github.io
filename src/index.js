import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import * as firebase from 'firebase';
import './styles/index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyAE-_Tq8wktlI5kk06xpHA5U2YXBtWeERs',
  authDomain: 'my-cv-ad49e.firebaseapp.com',
  databaseURL: 'https://my-cv-ad49e.firebaseio.com',
  projectId: 'my-cv-ad49e',
  storageBucket: 'my-cv-ad49e.appspot.com',
  messagingSenderId: '657565193862',
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
