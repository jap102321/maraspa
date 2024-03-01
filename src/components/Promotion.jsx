import styles from '../styles/Promotion.module.css';
// import vidPromo from '../assets/videos/sepprom.mp4';
import imgPromo from '../assets/Imagenes/promo.jpeg';
import Button from './UI/Button';
import { Link } from 'react-router-dom';
const Promotion = () => {
  return (
    <>
      <div className={styles.promotion} data-aos='zoom-in-up'>
        <img src={imgPromo} alt='Limpieza facial bono de regalo' />
        <Link to='/contact'>
          <Button title='Conoce que incluye' theme='cardButton' />
        </Link>
      </div>
    </>
  );
};

export default Promotion;
