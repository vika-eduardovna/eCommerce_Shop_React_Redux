import React, { useRef, useEffect } from 'react'
import { gsap, Power3 } from 'gsap'
import s from './style.module.sass'
import image from './media/main_section.png'

export default function HeaderSection() {

    let imgref = useRef(null);
    let pRef = useRef(null);
    let headerRef = useRef(null);

    useEffect(() => {
        gsap.to(imgref,
            1.8, {
            opacity: 1,
            y: 25,
            ease: Power3.easeOut
        })
        gsap.to(pRef,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .2

            }
        )
        gsap.to(headerRef,
            .8,
            {
                opacity: 1,
                y: -30,
                ease: Power3.easeOut,
                delay: .2
            }
        )
    }, []);

    return (
        <section className={['wrapper', s.container].join(' ')}>
            <div className={s.headers}>
                <p ref={el => { pRef = el }}>New season</p>
                <h2 ref={el => { headerRef = el }}>Sale</h2>
                <div className={s.buttons}>
                    <button className={s.promo_btn}>All promotions</button>
                    <button className={s.learn_more_btn}>Learn more</button>
                </div>
            </div>

            <div className={s.image}>
                <img ref={el => { imgref = el }} src={image} alt="shopping_girl" />
            </div>
        </section>
    )
}
