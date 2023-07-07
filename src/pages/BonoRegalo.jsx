import styles from "../styles/BonoRegalo.module.css";
import Button from "../components/UI/Button";
import { useEffect } from "react";
const BonoRegalo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.moreInfo}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <h1 style={{ fontFamily: "Parisienne, sans-serif" }}>
          Regala a los que más amas
        </h1>
        <h2>un momento inolvidable</h2>
      </div>

      <div
        className={styles.buyData}
        data-aos="fade-left"
        data-aos-duration="600"
      >
        <h1 style={{ fontFamily: "Parisienne, sans-serif" }}>Compra</h1>
        <h2>Un bono de regalo</h2>
        <p>
          En MaraSpa valoramos tu experiencia y comodidad. Nuestros bonos de
          regalo tienen una vigencia de un año para que puedas disfrutarlos a tu
          conveniencia. Si necesitas realizar alguna modificación en tu reserva,
          te ofrecemos la flexibilidad de cancelarla con al menos 24 horas de
          anticipación. Ten en cuenta que el bono no es canjeable por dinero en
          efectivo y solo puede ser utilizado por la persona registrada en el
          bono de regalo. Estamos comprometidos en brindarte un servicio
          excepcional y garantizar tu satisfacción en cada paso del camino. ¡No
          dudes en consultarnos si tienes alguna pregunta o inquietud adicional!
          Estaremos encantados de ayudarte.
        </p>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=573135630771&text&type=phone_number&app_absent=0"
        >
          <Button title="Más información" theme="giftButton" />
        </a>
      </div>
    </div>
  );
};

export default BonoRegalo;
