import Button from "../../components/UI/Button";
import styles from "./ServiceCard.module.css";
const ServiceCard = ({ title, price, description, duration }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.mainInfo}>
          <h2>{title}</h2>
          <h3>{duration}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.costs}>
          <h3>{price}</h3>
          <Button title="Solicita tu cita" theme="serviceCard" />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
