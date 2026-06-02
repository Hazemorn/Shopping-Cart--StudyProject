import s from './CartHeader.module.scss';

const CartHeader = () => {
    return (  
        <header className={s.cart_header}>
            <div className={s.cart_header__title}>Name</div>
            <div className={s.cart_header__count}>Quantity</div>
            <div className={s.cart_header__cost}>Price</div>
        </header>
    );
}
 
export default CartHeader;