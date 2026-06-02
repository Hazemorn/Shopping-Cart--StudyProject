import CartHeader from '../CartHeader/CartHeader';
import CartFooter from '../CartFooter/CartFooter'
import Product from '../Product/Product'
import s from './Cart.module.scss';

const Cart= () => {
  return (
    <section className={s.section_cart}>
        <header className={s.section_cart__header}>
            <div className='container'>
                <h1 className='titles-1'>Shopping Cart </h1>  
            </div>
            </header>
        <div className={s.section_cart__body}>
            <div className='container'>
                <CartHeader/>
                <Product/>
                <CartFooter/>
            </div> 
        </div>
    </section>
  )
}

export default Cart;