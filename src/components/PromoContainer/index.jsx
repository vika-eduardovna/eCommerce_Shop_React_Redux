import React from 'react'
import PromoItem from '../PromoItem/index'
import { useSelector } from 'react-redux'
import s from './style.module.sass'

export default function PromoContainer() {
  const state = useSelector(state => state.promo_data);
  return (
    <section>
      <div className='wrapper'>
        <div className={s.categ_box}>
          <h3>Promotions</h3>
          <button>All promotions</button>
        </div>
        <div className={['wrapper', s.container].join(' ')}>
          {
            state.map(el => <PromoItem key={el.id} {...el} />)
          }
        </div>
      </div>
    </section>
  )
}
