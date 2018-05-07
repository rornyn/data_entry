import React, { Component } from 'react';


export class Header extends Component{
  render(){
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">ReactDemo</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#">Make entry </a></li>
            <li><a href="#">List entry</a></li>
            <li><a href="#">Exit</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
