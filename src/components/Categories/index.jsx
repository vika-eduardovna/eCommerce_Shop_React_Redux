import React from 'react'
import s from './style.module.sass'
import CategorieItem from '../CategorieItem/index'
import { useSelector } from 'react-redux'

export default function Categories() {
  const state = useSelector(state => state.data);

  return (
    <section>
      <div className='wrapper'>
        <div className={s.categ_box}>
          <h3>Categories</h3>
          <button>All categories</button>
        </div>
        <div className={['wrapper', s.container].join(' ')}>
          {
            state.map(el => <CategorieItem key={el.id} {...el} />)
          }
        </div>
      </div>
    </section>
  )
}