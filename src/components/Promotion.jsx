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
          <h2>Promoción Julio</h2>
          <div className={styles.description}>
            <h3>Válido hasta: 15 Julio 2023</h3>
            <h3>Aprovecha esta promoción que tenemos de julio</h3>
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