import styles from '../styles/Promotion.module.css';
import vidPromo from '../assets/videos/sepprom.mp4';
// import imgPromo from '../assets/Imagenes/promo.webp';
import Button from './UI/Button';
import { Link } from 'react-router-dom';
const Promotion = () => {
  return (
    <>
      <div className={styles.promotion} data-aos='zoom-in-up'>
        <video src={vidPromo} controls='controls' />
        <Link to='/contact'>
          <Button title='Conoce que incluye' theme='cardButton'/>
        </Link>
      </div>
    </>
  );
};

export default Promotion;

{
  /* <img src={imgPromo} alt='Limpieza facial bono de regalo' />
<div className={styles.promo}>
  <h2>Promoción Agosto</h2>
  <div className={styles.description}>
    <h3>Paga 1 y van 2 personas.</h3>
    <h3 id={styles.description}>
      Masaje relajante con piedras volcanicas, exfoliación corporal y
      baño de cajón.
    </h3>
  </div>
  <div className={styles.otherInfo}>
    <h3>Costo de 170.000$</h3>
    <Link to='/contact'>
      <Button title='Conoce que incluye' theme='cardButton' />
    </Link>
  </div>
</div> */
}
