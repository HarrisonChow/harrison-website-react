import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {

    return (
      <div className="aboutme" id = "aboutme">
        <div id = "about">
          <div className="col-md-1"></div>
          <div className="col-md-10">
          <div className="media">
            <div className="media-left media-top">
              <img className="media-object" src="../../../app/assets/images/me.jpg" style={{width: '100px', height: '100px', borderRadius: '50%'}}/>
            </div>
            <div className="media-body">
              <p>Hello, I'm Harrison Chow,  a friendly web developer based in Sydney in the Australia.</p>
              <p>I was born in Beijing but spent 9 years in Sydney after I graduated from University of Wollongong with master of computer science. During this Period, I've had various roles not only in the web industry. And I found I have more passion for software and technology. So that's why I enrol in General Assembly to refresh myself. I enjoy being challenged and working on projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me.</p>
              <p>I am a conscientious person who works hard and pays attention to detail. I'm flexible, quick to pick up new skills and eager to learn from others. I also have lots of ideas and enthusiasm.</p>
              <p>I'm always looking for a new challenge, opportunity or problem to solve. Connect with me if you have something interesting to share.</p>
              <p>
                Take care. Have fun. Be happy.
              </p>

              <p>
                &nbsp;
              </p>
              <div className="row">
                <div className="col-xs-1 col-sm-1">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <div className="col-xs-11 col-sm-11">
                  Harrison Chow
                </div>
              </div>
              <div className="row">
                <div className="col-xs-1 col-sm-1">
                  <i className="fa fa-phone fa-1x" aria-hidden="true"></i>
                </div>
                <div className="col-xs-11 col-sm-11">
                  0430289007
                </div>
              </div>

              <div className="row">
                <div className="col-xs-1 col-sm-1">
                  <i className="fa fa-envelope-o fa-1x" aria-hidden="true"></i>
                </div>
                <div className="col-xs-11 col-sm-11">
                  harrison.chow@hotmail.com
                </div>
              </div>


            </div>
          </div>

        </div>

          <div className="col-md-1"></div>

        </div>
      </div>
    );
  }
}
