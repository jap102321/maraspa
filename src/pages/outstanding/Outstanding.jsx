import { useState, useEffect } from "react";
import styles from "./Outstanding.module.css";
import { useLocation } from "react-router-dom";
import { steamBath, shapingMassage } from "./outstandData";
import Button from "../../components/UI/Button";

const Outstanding = () => {
  const [service, setService] = useState([]);
  const url = useLocation().pathname;

  useEffect(() => {
    if (url === "/services/steaming-bath") {
      setService(steamBath);
    } else if (url === "/services/shaping-massage") {
      setService(shapingMassage);
    }
  }, [url]);

  return (
    <div className={styles.outstanding}>
      {service.map(({ title, description, assets, list }) => {
        return (
          <div className={styles.outstandingContainer} key={title}>
            <div className={styles.description}>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className={styles.assets}>
              <iframe
                src={assets}
                title={title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <ul>
              <h2>Beneficios</h2>
              {list.map((data) => {
                return <li key={data}>{data}</li>;
              })}
            </ul>
            <a
              href="https://api.whatsapp.com/send/?phone=573135630771&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <Button title="Solicita tu cita" theme="serviceCard" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Outstanding;
