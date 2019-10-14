import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link className="links" to="/">
            Home
            </Link>
        </div>
        <div>
          <Link className="links" to="/about">
            About
            </Link>
        </div>
        <div>
          <Link classname="links" to="/contact">
            Contact
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
