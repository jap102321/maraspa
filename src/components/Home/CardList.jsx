import styles from "../../styles/CardList.module.css";
import BigCard from "../UI/BigCard";
import card1 from "../../assets/Imagenes/card1.jpg";
import card2 from "../../assets/Imagenes/card2.jpg";
import card3 from "../../assets/Imagenes/card3.jpg";

const CardList = () => {
  return (
    <>
      <div className={styles.cardList} data-aos="fade-left">
        <div className={styles.title}>
          <h1>Respira</h1>
          <p>Regálate un momento para ti o para los que más quieres</p>
        </div>
        <div className={styles.cards}>
          <BigCard
            bg={card1}
            title="Regala experiencias"
            desc="Bono de regalo"
            btnDesc="Conoce más"
            btnUrl="/giftbono"
          />
          <BigCard
            bg={card2}
            title="Conoce que ofrecemos"
            desc="Más de 40 servicios en paquetes"
            btnDesc="Conócelos"
            btnUrl="/services"
          />
          <BigCard
            bg={card3}
            title="Reserva ahora"
            desc="Fácil y en linea"
            btnDesc="Contáctanos"
            btnUrl="/contact"
          />
        </div>
      </div>
    </>
  );
};

export default CardList;
