import Button from "../../components/UI/Button";
import styles from "./ServiceCard.module.css";
import { FaClock } from "react-icons/fa";

const ServiceCard = ({ title, price, description, duration }) => {
  return (
    <>
      <div className={styles.card} data-aos="zoom-in-up">
        <div className={styles.mainInfo}>
          <h2>{title}</h2>
          <h3 style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FaClock />
            {duration}
          </h3>
          <p>{description}</p>
        </div>
        <div className={styles.costs}>
          <h3>{price}</h3>
          <a
            href="https://api.whatsapp.com/send/?phone=573135630771&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <Button title="Solicita tu cita" theme="serviceCard" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
