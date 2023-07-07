import styles from "../styles/Instalations.module.css";
const Instalations = () => {
  return (
    <>
      <div className={styles.instalations}>
        <div className={styles.instalationsDescription}>
          <h1 style={{ fontFamily: "Parisienne, sans-serif" }}>
            Lo más importante
          </h1>
          <p>
            Para una correcta relajación es un espacio adecuado, por eso en
            MaraSpa te ofrecemos un espacio dispuesto para la absoluta
            relajación, incluyendo baños de cajón, jacuzzi y comodas camillas
            para un momento especial de conexión
          </p>
        </div>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube.com/embed/gRzn_zM2YWY"
            title=""
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Instalations;
