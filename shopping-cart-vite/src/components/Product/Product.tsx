import s from './Product.module.scss';

interface IProduct {
  id: number;
  img: string;
  name: string;
  quantity: number;
  maxQuantity: number;
  price: number;
  totalPrice: number;
}

interface ProductProps {
  item: IProduct; 
  deleteProduct: (id: number) => void; 
  increment: (id: number) => void;
  decrement: (id: number) => void;
  changeValue: (id: number, value: string) => void;
}

export const Product: React.FC<ProductProps> =  ({item, deleteProduct, increment, decrement, changeValue}) => {
  const {id , img, name, quantity, totalPrice} = item;

  return (
    <section key={id} className={s.product}>
        <div className={s.product__img}><img src={img} alt={name}/></div>
        <div className={s.product__name}>{name}</div>
        <div className={s.product__count_box}>
          <div className={s.product__count}>
            <input type='number' onChange={(e)=>changeValue(id, e.target.value)} className={s.product__count_input} min='1' max='100' value={quantity}/>
          </div>
          <div className={s.product__buttons}>
            <button onClick={() => increment(id)}><img src='../../../public/feather-icon/arrow-up.svg' alt='Up'/></button>
            <button onClick={() => decrement(id)}><img src='../../../public/feather-icon/arrow-down.svg' alt='Down'/></button>
          </div>
        </div>
        <div className={s.product__price}>{totalPrice} BYN</div>
      <button type='button' onClick={() => deleteProduct(id)}><img src='../../../public/feather-icon/x.svg' alt='Delete'/></button>
    </section>
  )
}

export default Product;

