import style from "../../styles/Services.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { serviceLimpieza, servicePackage, serviceMassage } from "./ServiceList";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [service, setService] = useState([]);
  const url = useLocation().pathname;

  useEffect(() => {
    if (url === "/services/facial-clean") {
      setService(serviceLimpieza);
    } else if (url === "/services/packages") {
      setService(servicePackage);
    } else {
      setService(serviceMassage);
    }
  }, [url]);

  return (
    <div>
      {service.map((data) => {
        return (
          <div className={style.specificService} key={data.title}>
            <h1>{data.title}</h1>
            <p style={{ textAlign: "center" }}>{data.description}</p>
            <div className={style.servicesDesc}>
              {data.servicios.map((data) => {
                return (
                  <ServiceCard
                    title={data.title}
                    duration={data.duration}
                    description={data.description}
                    price={data.price}
                    key={data.title}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
