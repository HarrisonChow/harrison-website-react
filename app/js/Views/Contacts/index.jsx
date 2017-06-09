import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Contacts extends Component {
  render() {

    return (
      <div className="contact">
        <div id="contact">
          <div className="row">
            <div className="col-sm-7 col-md-8" id="alltext">
                If you're interested in getting in touch for development-related opportunities or just want to grab a coffee, feel free to give me or call or shoot me an e-mail!
            </div>
            <div className="col-sm-5 col-md-4" id="contact-name">
              <div className="row">
                <div className="col-xs-2 col-sm-2">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <div className="col-xs-10 col-sm-10">
                  Harrison Chow
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 col-sm-2">
                  <i className="fa fa-phone fa-1x" aria-hidden="true"></i>
                </div>
                <div className="col-xs-10 col-sm-10">
                  0430289007
                </div>
              </div>

              <div className="row">
                <div className="col-xs-2 col-sm-2">
                  <i className="fa fa-envelope-o fa-1x" aria-hidden="true"></i>
                </div>
                <div className="col-xs-10 col-sm-10">
                  harrison.chow@hotmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
