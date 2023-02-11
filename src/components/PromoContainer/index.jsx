import React, { useEffect } from 'react'
import PromoItem from '../PromoItem/index'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllProducts } from '../../store/asyncActions/products'
import s from './style.module.sass'
import Spinner from '../Spinner'
import Card from '../Card'

export default function PromoContainer() {
  const state = useSelector(state => state.all_products);
  const dispatch = useDispatch();
  const id = Math.floor(Math.random() * 100);
  console.log(id)

  useEffect(() => {
    dispatch(loadAllProducts())
  }, []);

  return (
    <section>
      <div className='wrapper'>
        <div className={s.categ_box}>
          <h3>Promotions</h3>
          <button>All promotions</button>
        </div>
        <div className={['wrapper', s.container].join(' ')}>
          {
            state.length === 0
              ? <Spinner />
              : state.slice(0, 6).map(el => <Card key={el.id} {...el} />)
          }
        </div>
      </div>
    </section>
  )
}
