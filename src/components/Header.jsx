import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import Logo from "../assets/logos/logo.webp";
const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={Logo} className={styles.logo} />
        <div className={styles.navbarContainer}>
          <ul className={styles.navbar}>
            <li>
              <Link to="/" className={styles.current}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/giftbono">Bono de regalo</Link>
            </li>
            <li>
              <Link to="/services">Servicios</Link>
            </li>
            <li>
              <Link to="/instalations">Instalaciones</Link>
            </li>
            <li>
              <Link to="/contact">Contactanos</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
