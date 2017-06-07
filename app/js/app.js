import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import Home from './views/Home';
import About from './views/About';
import Education from './views/Education';
import Experience from './views/Experience';
import Skills from './views/Skills';
import Portfolio from './views/Portfolio';
import Contacts from './views/Contacts';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='about' component={ About } />
      <Route path='education' component={ Education } />
      <Route path='experience' component={ Experience } />
      <Route path='skills' component={ Skills } />
      <Route path='portfolio' component={ Portfolio } />
      <Route path='contacts' component={ Contacts } />
    </Route>
  </Router>,
  document.getElementById('app')
);
