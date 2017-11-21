import React from 'react';
import { Link } from 'react-router-dom';
import MainRoutes from './components/MainRoutes';

import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <div>
    <Navbar/>
    <div className="container">
      <MainRoutes />
    </div>
    <div className="fixed-action-btn vertical">
      <Link to="/" className="btn-floating btn-large red darken-4">
        <i className="fa fa-bars"> </i>
      </Link>
      <ul>
        <li><Link to ="/about" className="btn-floating yellow darken-4"><i className="fa fa-question-circle"> </i></Link></li>
        <li><Link to ="/" className="btn-floating blue darken-4"><i className="fa fa-desktop"> </i></Link></li>
        <li><Link to ="/products/add" className="btn-floating green darken-4"><i className="fa fa-edit"> </i></Link></li>
      </ul>
    </div>

  </div>
);

export default App;
