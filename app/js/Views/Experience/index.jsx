import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Experience extends Component {
  render() {

    return (
      <div className="experience" id="exp">
        <div id="experience">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4">Prime Promotional Products</div>
            <div className="col-md-6">Responsible for graphic design & laser engraving machine setting  2013.2 - 2015.9</div>
            <div className="col-md-1"></div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4">Buy Direct Deals</div>
            <div className="col-md-6">Responsible for Network Maintenance, Website & database Building , include UI Design 2010.9 - 2012.10</div>
            <div className="col-md-1"></div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4">Quantum Change Seminars</div>
            <div className="col-md-6">Responsible for Website rebuilding & UI design, 03/2009 - 05/2009</div>
            <div className="col-md-1"></div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4">Chinese Academy of Social Science</div>
            <div className="col-md-6">Responsible for Network Maintenance, Website Building & Maintenance & Update through Content Management System , 2004 - 2007</div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    );
  }
}
