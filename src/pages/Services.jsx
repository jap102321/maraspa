import styles from "../styles/Services.module.css";
import card1 from "../assets/Imagenes/cardservice1.webp";
import card2 from "../assets/Imagenes/cardservice2.webp";
import card3 from "../assets/Imagenes/cardservice3.webp";
// import card4 from "../assets/Imagenes/moldMasaje.webp";
import card5 from "../assets/Imagenes/baCajon.webp";
import SmallCard from "../components/UI/SmallCard";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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

  const outstandingServices = [
    {
      bg: card5,
      title: "Baño de cajón",
      href: "/services/steaming-bath",
    },
  ];

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.title}>
        <h1>¿Qué podemos hacer por ti?</h1>
        <p>
          En MaraSpa tenemos una gran variedad de servicios, que van desde
          masajes moldeadores hasta tratamientos faciales. Sea para ti o sea
          para un ser que amas, en MaraSpa recibirás una atención impresionante
          ya sea en un masaje individual o un paquete de masajes.
        </p>
      </div>
      <div className={styles.ourServices}>
        <h1>Nuestros servicios</h1>
        <div className={styles.services} data-aos="flip-down">
          {services.map(({ title, href, bg }) => {
            return <SmallCard title={title} href={href} bg={bg} key={title} />;
          })}
        </div>
        <h1>Destacado</h1>
        <div className={styles.services} data-aos="flip-down">
          {outstandingServices.map(({ title, href, bg }) => {
            return <SmallCard title={title} href={href} bg={bg} key={title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
