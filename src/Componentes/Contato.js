import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <a
            href="mailto:robertoconradorc@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>robertoconradorc@gmail.com</li>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5577991556513&"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>+55 77 99155-6513</li>
          </a>
          <li>Bahia, Brasil</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
