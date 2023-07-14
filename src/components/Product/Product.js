import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentName, setCurrentName] = useState(props.name);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = () => {
    const foundSize = props.sizes.find(size => size.name === currentSize)
    return (props.basePrice + foundSize.additionalPrice);
  };

  const addToCart = event => {
    event.preventDefault();

    console.log('Product summary');
    console.log('============');
    console.log('Name:', props.title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={`${currentName} shirt`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${currentName}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={addToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
            {props.sizes.map(size => <li key={size.name}><button type="button" className={clsx(currentSize === size.name && styles.active)} onClick={() => setCurrentSize(size.name)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(color => <li key={color}><button type="button" className={clsx(prepareColorClassName(color), currentColor === color && styles.active)}  onClick={() => setCurrentColor(color)}></button></li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;