import React from 'react'
import s from './style.module.sass'

export default function Product({ image, title, price, discountPercentage }) {

    return (
        <div className={s.item}>
            <img src={image} alt="product_img" />

            <div className={s.price}>
                {
                    discountPercentage === ''
                        ? <p>{price}</p>
                        : <>
                            <p className={s.full_price}>{price}€</p>
                            <p className={s.price_disc}>{price - price * discountPercentage / 100}€</p>
                            <p className={s.discount}>{discountPercentage}%</p>
                        </>
                }

            </div>
            <p className={s.title_price}>{title}</p>
        </div>
    )
}
