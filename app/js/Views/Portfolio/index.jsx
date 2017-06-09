import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Portfolio extends Component {
  render() {

    return (
      <div className="row portfolio_0" id="projects">
        <div id="project">

          <div className="row">
            <div className="col-sm-6 col-md-2">
              <div className="thumbnail">
                <a href="https://harrisonchow.github.io/tictactoe/index.html" className="thumbnail">
                  <img src="../../../app/assets/images/portfolios/projects/tictactoe.jpg"/>
                </a>
                <div className="caption">
                  <h4>Tic Tac Toe</h4>
                  <p>First project in GA</p>
                  <p>Javascript + CSS + HTML</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <a href="http://ga-project-3.herokuapp.com/" className="thumbnail">
                  <img src="../../../app/assets/images/portfolios/projects/toptopics.jpg"/>
                </a>
                <div className="caption">
                  <h3>Top topics</h3>
                  <p>Group project</p>
                  <p>HTML + CSS + Ruby + Rails + AJAX + D3 + Backbone</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <a href="#" className="thumbnail">
                  <img src="../../../app/assets/images/portfolios/projects/ewall.jpg"/>
                </a>
                <div className="caption">
                  <h3>E wall </h3>
                  <p>Final project</p>
                  <p>HTML + CSS + Ruby + Rails + AJAX + jquery</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-2">
              <div className="thumbnail">
                <a href="https://coffee-buddy.herokuapp.com/" className="thumbnail">
                  <img src="../../../app/assets/images/portfolios/projects/coffee-buddy.jpg"/>
                </a>
                <div className="caption">
                  <h4>Coffee Buddy</h4>
                  <p>Second project in GA</p>
                  <p>Ruby + Rails + CSS + HTML</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
