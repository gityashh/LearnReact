import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={styles.navbar}>
      <NavLink to="/" style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      <NavLink to="/about" style={styles.link} activeStyle={styles.activeLink}>
        About
      </NavLink>
      <NavLink to="/contact" style={styles.link} activeStyle={styles.activeLink}>
        Contact
      </NavLink>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-around',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  activeLink: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
};

export default Nav;