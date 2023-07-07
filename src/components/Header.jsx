import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import Logo from "../assets/logos/logo.webp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary ${styles.container}`}
      style={{ backgroundColor: "#f4f4f4" }}
    >
      <div>
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} style={{ width: "150px" }} />
          </Link>
        </Navbar.Brand>
      </div>
      <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`me-auto ${styles.navLinks}`}
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <Link to="/">Inicio</Link>
            <Link to="/giftbono">Bono de regalo</Link>
            <Link to="/services">Servicios</Link>
            <Link to="/instalations">Instalaciones</Link>
            <Link to="/contact">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;

{
  /* <ul className={styles.navbar}>
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
</ul> */
}
