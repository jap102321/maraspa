import styles from "../../styles/Banner.module.css";
import Button from "../UI/Button";
import BgImage from "../../assets/Imagenes/banner2.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className={styles.banner} data-aos="fade-left">
        <div className={styles.description}>
          <h2 style={{ fontFamily: "Parisienne, sans-serif" }}>MaraSpa</h2>
          <h1>Relaja tu cuerpo, libera tu mente</h1>
          <p>
            En cada uno de nuestros masajes, llevamos a cabo una exhaustiva
            evaluación de tus necesidades para brindarte un servicio
            personalizado. Utilizamos ingredientes naturales y exclusivos,
            complementados con la inestimable experiencia de nuestras masajistas
            expertas que te atenderán.
          </p>
          <Link to="/services">
            <Button title="Servicios" theme="bannerBtn" data-aos="fade-left" />
          </Link>
        </div>
        <img className={styles.bgImage} src={BgImage} alt="Banner image" />
      </div>
    </>
  );
};

export default Banner;
