import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Education extends Component {
  render() {

    return (
      <div className='Education'>
        <div id = "education">
          <div class="col-md-1"></div>
          <div class="col-md-10">
          <div class="media">
            <div class="media-left media-top">
              <a href="#">
                <img class="media-object" src="images/ga.png" style="width: 64px; height: 64px;">
              </a>
            </div>
            <div class="media-body">
              <h3 class="media-heading">General Assembly</h3>
              <p>Web Development Immersive,  May 2016 - July 2016</p>
              <p>General Assembly is a world leader in digital education who provide
                courses in design, technology and business.</p>
            </div>
          </div>

          <div class="media">
            <div class="media-left media-top">
              <a href="#">
                <img class="media-object" src="images/uow.jpg" style="width: 60px; height: 60px;">
              </a>
            </div>
            <div class="media-body">
              <h3 class="media-heading">University of Wollongong</h3>
              <p>Master of computer science advanced (Graduated),  07/2007-07/2009</p>
              <p>Major of Digital Multimedia Programming
              & Major of Computer and Network Security</p>
            </div>
          </div>

          <div class="media">
            <div class="media-left media-top">
              <a href="#">
                <img class="media-object" src="images/lgd.jpg" style="width: 64px; height: 64px;">
              </a>
            </div>
            <div class="media-body">
              <h3 class="media-heading">Liaoning Technical University</h3>
              <p>Bachelor of Science (Graduated),  09/2000-07/2004</p>
              <p>Major of Information and Computing Science<p>
            </div>
          </div>
        </div>

          <div class="col-md-1"></div>

        </div>
      </div>
    );
  }
}
