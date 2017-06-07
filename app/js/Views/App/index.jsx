import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About me</Link>
        <Link to='/education'>Education</Link>
        <Link to='/experience'>Experience</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contacts'>Contacts</Link>        
        { children }
      </div>
    );
  }
}
