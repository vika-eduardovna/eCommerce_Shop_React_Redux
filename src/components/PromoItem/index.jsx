import React from 'react'
import s from './style.module.sass'

export default function PromoItem({id, image, title, price, discountPercentage }) {

    return (
        <div className={s.item}>
            <img src={image} alt="promo" />

            <div className={s.price}>
                {
                    discountPercentage === ''
                        ? <div>{price}</div>
                        : <>
                            <div className={s.full_price}>{price - price * discountPercentage / 100}€</div>
                            <div className={s.price_disc}>{price}€</div>
                            <div className={s.discount}>{discountPercentage}%</div>
                        </>
                }

            </div>
            <h6 className={s.title_price}>{title}</h6>
        </div>
    )
}
