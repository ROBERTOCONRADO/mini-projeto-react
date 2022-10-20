import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <li>
        <NavLink className={styles.link} to="/" end>
          Produtos
        </NavLink>
      </li>
      <li>
        <NavLink lassName={styles.link} to="contato">
          Contato
        </NavLink>
      </li>
    </nav>
  );
};

export default Header;
