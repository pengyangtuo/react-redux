import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <div>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="about"  activeClassName="active">About</Link>
      {" | "}
      <Link to="courses"  activeClassName="active">Courses</Link>
    </div>
  );
};

export default Header;