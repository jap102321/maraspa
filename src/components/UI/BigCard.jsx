import { Link } from "react-router-dom";
import styles from "./BigCard.module.css";
import Button from "./Button";
const BigCard = ({ bg, title, desc, btnDesc, btnUrl }) => {
  return (
    <>
      <div className={styles.card} style={{ backgroundImage: `url(${bg})` }}>
        <div className={styles.descCard}>
          <h5>{title}</h5>
          <p>{desc}</p>
          <Link to={btnUrl}>
            <Button title={btnDesc} theme="cardButton" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BigCard;
