import {useState} from 'react';
import s from './Product.module.scss';

const Product = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const increment = ():void => {
    setQuantity((quantity) => quantity + 1);
  };
  
  const decrement = ():void => {
    setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1 ) )
  };
  return (
    <section className={s.product}>
      <div className={s.product__img}><img src='../../../public/macbook.png'/></div>
      <div className={s.product__name}>Apple MacBook Air 13</div>
      <div className={s.product__count_block}>
        <div className={s.product__count}>
          {quantity}
        </div>
        <div className={s.product__buttons}>
          <button onClick={increment}><img src='../../../public/feather-icon/arrow-up.svg'/></button>
          <button onClick={decrement}><img src='../../../public/feather-icon/arrow-down.svg'/></button>
        </div>
      </div>
      <div className={s.product__price}>110 000 руб.</div>
      <div className={s.product__remove}><img src='../../../public/feather-icon/x.svg'/></div>
    </section>
  )
}

export default Product;

