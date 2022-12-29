import React from 'react'
import s from './style.module.sass'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add_to_cart_action } from '../../store/reducer/cartReducer'

export default function Product({ id, image, title, price, discountPercentage }) {
    const link = `/product/${id}`;
    const full_price = (price - price * discountPercentage / 100).toFixed(1);
    const dispatch = useDispatch();
    const addToCart = () => dispatch(add_to_cart_action(id, title, price, image));

    return (
        <div className={s.item}>
            <div className={s.image_block}>
                <Link to={link}>
                    <img src={image} alt="product_img" />
                </Link>
            </div>

            <div className={s.price}>
                {
                    discountPercentage === ''
                        ? <div>{price}</div>
                        : <>
                            <div className={s.full_price}>{full_price}€</div>
                            <div className={s.price_disc}>{price}€</div>
                            <div className={s.discount}>-{discountPercentage}%</div>
                        </>
                }
            </div>
            <div className={s.title_price}>{title}</div>
            <button
                className={s.add_to_cart_btn}
                onClick={addToCart}>
                Add to cart
            </button>
        </div>
    )
}