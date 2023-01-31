import React from 'react'
import s from './style.module.sass'

export default function PromoItem({ image, title, price, discount }) {

    return (
        <div className={s.item}>
            <img src={image} alt="promo" />

            <div className={s.price}>
                {
                    discount === ''
                        ? <div>{price}</div>
                        : <>
                            <div className={s.full_price}>{price - price * discount / 100}€</div>
                            <div className={s.price_disc}>{price}€</div>
                            <div className={s.discount}>{discount}%</div>
                        </>
                }

            </div>
            <h6 className={s.title_price}>{title}</h6>
        </div>
    )
}
