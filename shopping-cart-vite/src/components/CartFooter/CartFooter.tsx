import s from './CartFooter.module.scss'

const CartFooter = () => {
    return ( 
        <footer className={s.cart_footer}>
            <div className={s.cart_footer__count}>XX</div>
            <div className={s.cart_footer__cost}>YY</div>
        </footer>
     );
}
 
export default CartFooter;