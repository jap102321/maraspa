import styles from "../styles/Services.module.css";
import card1 from "../assets/Imagenes/cardservice1.jpg";
import card2 from "../assets/Imagenes/cardservice2.jpg";
import card3 from "../assets/Imagenes/cardservice3.jpg";
import SmallCard from "../components/UI/SmallCard";
const Services = () => {
  const services = [
    {
      bg: card1,
      title: "Limpieza facial",
      href: "/services/facial-clean",
    },
    {
      bg: card2,
      title: "Paquetes",
      href: "/services/packages",
    },
    {
      bg: card3,
      title: "Masajes individuales",
      href: "/services/massages",
    },
  ];

  const reseña = [
    {
      reviewer: "",
      review: "",
    },
    {
      reviewer: "",
      review: "",
    },
  ];

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.title}>
        <h1>¿Qué podemos hacer por ti?</h1>
        <p>
          En MaraSpa tenemos una gran variedad de servicios, que van desde
          masajes reductores hasta tratamientos faciales. Sea para ti o sea para
          un ser que amas, en MaraSpa recibirás una atención impresionante ya
          sea en un masaje individual o un paquete de masajes.
        </p>
      </div>
      <div className={styles.ourServices}>
        <h1>Nuestros servicios</h1>
        <div className={styles.services}>
          {services.map((data) => {
            return (
              <SmallCard
                title={data.title}
                href={data.href}
                bg={data.bg}
                key={data.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
