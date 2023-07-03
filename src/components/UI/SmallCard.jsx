import styles from "./SmallCard.module.css";
import { Link } from "react-router-dom";
const SmallCard = ({ bg, title, href }) => {
  return (
    <>
      <Link to={href}>
        <div
          className={styles.smallCard}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <p>{title}</p>
        </div>
      </Link>
    </>
  );
};

export default SmallCard;
