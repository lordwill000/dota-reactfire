import React from 'react';
import brandLogo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className="Navbar full-width bg-dark">
      <div className="container top-nav">
        <div className="logo-wrapper nav-col">
          <img src={brandLogo} className="img-responsive Navbar-logo" />
          <span>DotA React</span>
        </div>
        <div className="page-control-wrapper nav-col">
          <button className="btn">Test</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
