import s from './CartFooter.module.scss'

interface ITotal {
    count: number;
    totalPrice: number;
}

interface totalProps {
    total: ITotal;
}

const CartFooter: React.FC<totalProps> = ({total}) => {
    const {count, totalPrice} = total;
    return ( 
        <footer className={s.cart_footer}>
            <div className={s.cart_footer__count}>{count} {count === 1 ? 'item' : 'items'}</div>
            <div className={s.cart_footer__cost}>{totalPrice} BYN</div>
        </footer>
     );
}
 
export default CartFooter;