import React from 'react'
import s from './style.module.sass'

export default function PromoItem({ image, title, price, discount }) {

    return (
        <div className={s.item}>
            <img src={image} alt="promo" />

            <div className={s.price}>
                {
                    discount === ''
                        ? <p>{price}</p>
                        : <>
                            <p className={s.full_price}>{price}€</p>
                            <p className={s.price_disc}>{price - price * discount / 100}€</p>
                            <p className={s.discount}>{discount}%</p>
                        </>
                }

            </div>
            <p className={s.title_price}>{title}</p>
        </div>
    )
}
