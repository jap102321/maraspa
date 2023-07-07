import Button from "../components/UI/Button";
import styles from "../styles/Contact.module.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className={styles.contact}>
        <div
          className={styles.banner}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 style={{ color: "white" }}>MaraSpa</h2>
          <h1>Contacto</h1>
          <p>Estamos listos para atenderlo</p>
          <Link to="/services">
            <Button title="Precios" theme="priceButton" />
          </Link>
        </div>
        <div className={styles.infoDiv}>
          <div
            className={styles.infoText}
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
          >
            <h3>Tienes alguna duda?</h3>
            <h2>Contactanos!</h2>
            <p>
              En nuestro equipo nos apasiona brindarle el mejor asesoramiento,
              por lo que no dude en ponerse en contacto con nosotros para
              cualquier pregunta o inquietud que pueda tener. Estamos aquí para
              atenderlo y responder a todas sus consultas a través de nuestros
              diversos canales de comunicación. Ya sea que prefiera llamarnos,
              enviarnos un mensaje por WhatsApp o escribirnos un correo
              electrónico, estaremos encantados de ayudarlo en todo lo que
              necesite. Su satisfacción es nuestra prioridad, y nos esforzaremos
              para brindarle respuestas claras y completas. ¡No dude en
              contactarnos y permítanos brindarle la atención personalizada que
              se merece!
            </p>
            <div className={styles.infoIcons}>
              <p>
                Centro Comercial Plaza Linares, piso 2, local 22 Via a, Llano
                Grande, Rionegro, Antioquia
              </p>
              <p>maraspa1025@gmail.com</p>
              <a
                href="https://api.whatsapp.com/send/?phone=573135630771&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <Button title="Número para contactarnos" theme="priceButton" />
              </a>
            </div>
          </div>
          <div
            className={styles.map}
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.951445425622!2d-75.4015116!3d6.1323326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469ec5111fd8e7%3A0x7d4badb99c36dbc5!2sMara%20Spa!5e0!3m2!1sen!2sco!4v1688134309954!5m2!1sen!2sco"
              style={{ border: 0 }}
              loading="lazy"
              title="Google Maps para referencia MaraSpa en pág contacto"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
