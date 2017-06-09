import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Education extends Component {
  render() {

    return (
      <div className="education" id = "edu">
        <div id = "education">
          <div className="col-md-1"></div>
          <div className="col-md-10">
          <div className="media">
            <div className="media-left media-top">
              <a href="#">
                <img className="media-object" src="../../app/assets/images/ga.png" style={{width: '64px', height: '64px'}}/>
              </a>
            </div>
            <div className="media-body">
              <h3 className="media-heading">General Assembly</h3>
              <p>Web Development Immersive,  May 2016 - July 2016</p>
              <p>General Assembly is a world leader in digital education who provide
                courses in design, technology and business.</p>
            </div>
          </div>

          <div className="media">
            <div className="media-left media-top">
              <a href="#">
                <img className="media-object" src="../../app/assets/images/uow.jpg" style={{width: '60px', height: '60px'}}/>
              </a>
            </div>
            <div className="media-body">
              <h3 className="media-heading">University of Wollongong</h3>
              <p>Master of computer science advanced (Graduated),  07/2007-07/2009</p>
              <p>Major of Digital Multimedia Programming
              & Major of Computer and Network Security</p>
            </div>
          </div>

          <div className="media">
            <div className="media-left media-top">
              <a href="#">
                <img className="media-object" src="../../app/assets/images/lgd.jpg" style={{width: '64px', height: '64px'}}/>
              </a>
            </div>
            <div className="media-body">
              <h3 className="media-heading">Liaoning Technical University</h3>
              <p>Bachelor of Science (Graduated),  09/2000-07/2004</p>
              <p>Major of Information and Computing Science</p>
            </div>
          </div>
        </div>

          <div className="col-md-1"></div>

        </div>
      </div>
    );
  }
}
