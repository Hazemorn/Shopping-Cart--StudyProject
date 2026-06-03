import {useEffect, useState} from 'react';
import CartHeader from '../CartHeader/CartHeader';
import CartFooter from '../CartFooter/CartFooter'
import Product from '../Product/Product'
import s from './Cart.module.scss';
import { products } from '../../store/data';
import type { IProduct } from '../../store/data';

const Cart: React.FC = () =>  {

    const [cart, setCart] = useState<IProduct[]>(products);

    interface ITotal {
        count: number;
        totalPrice: number;
    }

    const [total, setTotal] = useState<ITotal>({
        count: cart.reduce((acc, curr) => acc + curr.quantity , 0),
        totalPrice: cart.reduce((acc, curr) => acc + curr.totalPrice, 0),
    });

    useEffect(() => {
        setTotal({
            count: cart.reduce((acc, curr) => acc + curr.quantity , 0),
            totalPrice: cart.reduce((acc, curr) => acc + curr.totalPrice, 0),
        }
        )
    }, [cart])

    const deleteProduct = (id: number): void => {
        setCart((prevCart) => prevCart.filter((item) => id !== item.id ));
    };

    const increment = (id: number): void => {
        setCart((prevCart) => {
            return prevCart.map(item =>{
                if(item.id === id){
                    return { 
                        ...item,
                        quantity: item.quantity + 1,
                        totalPrice: (item.quantity + 1) * item.price,    
                    }
                } 
                return item
            });
        });
    }
      
    const decrement = (id: number):void => {
        setCart((prevCart) => {
            return prevCart.map(item =>{
                if(item.id === id){
                    return { 
                        ...item,
                        quantity: item.quantity = 1 ? 1 : item.quantity - 1,
                        totalPrice: item.quantity * item.price,    
                    }
                } 
                return item
            });
        });
    }

    const changeValue = (id: number, value: number):void => {
        setCart((prevCart) => {
            return prevCart.map(item =>{
                if(item.id === id){
                    return { 
                        ...item,
                        quantity: value,
                        totalPrice: value * item.price,
                    }
                } 
                return item
            });
        });
    }


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
                    {cart.map((item) =>
                        <Product key={item.id} item={item} deleteProduct={deleteProduct} increment={increment} decrement={decrement} changeValue={changeValue}/>
                    )}
                    <CartFooter total={total}/>
                </div> 
            </div>
        </section>
    )
}

export default Cart;