import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Skills extends Component {
  render() {

    return (
      <div className="skill">
        <div id="skill">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">React, Redux, Relay, GraphicQL</div>
            <div className="col-md-1"></div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">Javascript, jQuery, D3, HTML5</div>
            <div className="col-md-1"></div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">Babel, Webpack, Eslint, React Hot Loader</div>
            <div className="col-md-1"></div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">CSS3, SASS, Bootstrap, Material UI </div>
            <div className="col-md-1"></div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">Node, Backbone, Ruby, Rails, PHP, Magento</div>
            <div className="col-md-1"></div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">PostgreSQL, MySQL, SQLite3</div>
            <div className="col-md-1"></div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">Github, Agile, Jira, Confluence</div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    );
  }
}
