import React, { Component } from 'react';
import logo from '../img/logo-endurance-w.svg';

class Header extends Component {
    render () {
        return (
          <div className="App-header">
            <a
              href="#"
              className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}>
                &larr; Back
            </a>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="title">{this.props.text}</h1>
          </div>
        )
    }
}

export default Header;
