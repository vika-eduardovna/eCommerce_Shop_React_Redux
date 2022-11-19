import React from 'react'
import s from './style.module.sass'
import image from './media/image_3.png'

export default function DiscountSection() {
    return (
        <section className={['wrapper', s.container].join(' ')}>
            <div className={s.icon}>
                <img src={image} alt="photo" />
            </div>

            <div className={s.descr_block}>
               <p className={s.discount_title}>Discount 5%</p>
               <p className={s.p}>for the first order</p>
               <form className={s.form}>
                    <input type="tel" name="" placeholder='+49'/>
                    <button>Get deal</button>
               </form>
            </div>

           
        </section>
    )
}
