import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import Logo from "../assets/logos/logo.webp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary`}
      style={{ backgroundColor: "#f4f4f4" }}
      collapseOnSelect
    >
      <Container className={styles.container}>
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} style={{ width: "150px" }} alt="MaraSpa Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`ms-auto ${styles.navLinks}`}
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <Link to="/">Inicio</Link>
            <Link to="/giftbono">Bono de regalo</Link>
            <Link to="/services">Servicios</Link>
            <Link to="/instalations">Instalaciones</Link>
            <Link to="/contact">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
