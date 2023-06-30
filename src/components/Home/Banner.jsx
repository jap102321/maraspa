import styles from "../../styles/Banner.module.css";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.title}>
          <h1>Bienvenido a</h1>
          <h2>MaraSpa</h2>
        </div>
        <div className={styles.subtitle}>
          <h2>Relaja tu cuerpo, libera tu mente</h2>
        </div>
        <Link to="/services">
          <Button title="Servicios" theme="bannerBtn" />
        </Link>
      </div>
    </>
  );
};

export default Banner;
