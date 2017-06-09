import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="menu">
          <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                  </div>

                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/about'>About me</Link></li>
                      <li><Link to='/education'>Education</Link></li>
                      <li><Link to='/experience'>Experience</Link></li>
                      <li><Link to='/skills'>Skills</Link></li>
                      <li><Link to='/portfolio'>Portfolio</Link></li>
                      <li><Link to='/contacts'>Contacts</Link></li>
                    </ul>
                    { children }
                  </div>
              </div>
          </nav>
      </div>
    );
  }
}
