import React, { Component } from 'react'

import {Link} from 'react-router-dom';

export class Navbar extends Component {

  mystyle=()=>{
    return{
    backgroundColor : this.props.mode === 'dark' ? 'dark' : 'white',
    color : this.props.mode === 'dark' ? 'white' : 'black'
    };
  }
  

  
  render() {
    return (
      <div>
       <nav className={`navbar   navbar-expand-lg navbar-${this.props.mode}  bg-${this.props.mode}`} style={this.mystyle()} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link"  to="/business">Business</Link> </li>
        <li className="nav-item">
        <Link className="nav-link " to="/entertainment">Entertainment</Link> </li>

        <li className="nav-item">
        <Link className="nav-link" to="/health">Health</Link> </li>
        <li className="nav-item">
        <Link className="nav-link " to="/science">Science</Link> </li>
        <li className="nav-item">
        <Link className="nav-link " to="/sports">Sports</Link> </li>
        <li className="nav-item">
        <Link className="nav-link " to="/technology">Technology</Link> </li>
        </ul>

        <div className="form-check form-switch">
  <input className="form-check-input" onClick={this.props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">{this.props.text}</label>
</div>
       
       
     
     
    </div>
  </div>
</nav>
        
      </div>
    )
  }
}

export default Navbar



