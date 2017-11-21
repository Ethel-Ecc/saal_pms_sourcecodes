import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render (){
    return (
      <div>
        <nav className="z-depth-5 red darken-4">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center h3"><strong>...Saal</strong></Link>
            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars"> </i>
            </a>
            <ul className="side-nav" id="main-menu">
              <li><Link to="/"><i className="fa fa-desktop"> </i>Product Dashboard</Link> </li>
              <li><Link to="/products/add"> <i className="fa fa-plus-circle"> </i> Add New Product</Link> </li>
              <li><Link to="/about"><i className="fa fa-question-circle"> </i> About Us</Link> </li>

            </ul>

            <ul className="right hide-on-small-only">
              <li><Link to="/"><i className="fa fa-desktop"> </i>  Products Dashboard </Link> </li>
            </ul>

          </div>
        </nav>
      </div>
    )
  }
}
export default Navbar;
