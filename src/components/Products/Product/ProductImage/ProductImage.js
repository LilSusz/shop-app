import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = ({ currentName, title, currentColor}) => {
    return (
        <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${currentName}--${currentColor}.jpg`} />
      </div>
    );
  };
  
  ProductImage.propTypes = {
      currentName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      currentColor: PropTypes.string.isRequired,
  };
  
  export default ProductImage;