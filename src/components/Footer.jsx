import styles from '../styles/Footer.module.css';
import Logo from '../assets/logos/logo.webp';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.nav}>
          <img src={Logo} alt='Logo' width='150px' height='150px' />
          <ul>
            <li>
              <Link to='/giftbono'>Bono de regalo</Link>
            </li>
            <li>
              <Link to='/services'>Servicios</Link>
            </li>
            <li>
              <Link to='/instalations'>Instalaciones</Link>
            </li>
            <li>
              <Link to='/contact'>Contactanos</Link>
            </li>
          </ul>
        </div>
        {/* <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.951445425622!2d-75.4015116!3d6.1323326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469ec5111fd8e7%3A0x7d4badb99c36dbc5!2sMara%20Spa!5e0!3m2!1sen!2sco!4v1688134309954!5m2!1sen!2sco"
            width="140"
            height="120"
            style={{ border: 0 }}
            loading="lazy"
            title="Google Maps para referencia MaraSpa"
          ></iframe>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
