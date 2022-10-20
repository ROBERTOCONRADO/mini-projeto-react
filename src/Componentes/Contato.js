import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';

const Contato = () => {
  return (
    <section className={styles.contato}>
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>robertoconradorc@gmail.com</li>
          <li>+557799155-6513</li>
          <li>Bahia, Brasil</li>
          <li>robertoconradorc@gmail.com</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
