import React from 'react'
import s from './style.module.sass'

export default function PromoItem({ image, title, price, discount }) {

    return (
        <div className={s.item}>
            <img src={image} alt="promo" />
            <p className={s.title}>{title}</p>
            <div className={s.price}>
                {
                    discount === ''
                        ? <p>{price}</p>
                        : <>
                            <p style={{ textDecoration: 'line-through', color: 'grey' }}>{price}</p>
                            <p style={{ color: '#FFA3A3' }}>{price - price * discount / 100}</p>
                        </>
                }

            </div>
        </div>
    )
}
