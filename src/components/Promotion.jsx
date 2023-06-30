import styles from "../styles/Promotion.module.css";
import imgPromo from "../assets/Imagenes/promo.jpg";
import Button from "./UI/Button";
import { Link } from "react-router-dom";
const Promotion = () => {
  return (
    <>
      <div className={styles.promotion}>
        <img src={imgPromo} />
        <div className={styles.promo}>
          <h1>Promoción Julio</h1>
          <div className={styles.description}>
            <h2>Válido hasta: 15 Julio 2023</h2>
            <h2>Aprovecha esta promoción que tenemos de julio</h2>
          </div>
          <div className={styles.otherInfo}>
            <h3>Costo de 130.000$</h3>
            <Link to="/contact">
              <Button title="Conoce más" theme="cardButton" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotion;
