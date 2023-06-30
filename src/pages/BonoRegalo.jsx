import styles from "../styles/BonoRegalo.module.css";
import Button from "../components/UI/Button";
const BonoRegalo = () => {
  return (
    <div className={styles.container}>
      <h1>Dale a los que más amas</h1>
      <h2>un momento inolvidable</h2>
      <div className={styles.moreInfo}></div>
      <p>Consigue el tuyo</p>
      <p>Para más información dale al botón</p>
      <a href="https://api.whatsapp.com/send/?phone=573135630771&text&type=phone_number&app_absent=0">
        <Button title="Más información" theme="giftButton" />
      </a>
    </div>
  );
};

export default BonoRegalo;
