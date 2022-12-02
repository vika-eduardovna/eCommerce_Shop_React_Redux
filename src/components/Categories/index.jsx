import React, { useEffect } from 'react'
import s from './style.module.sass'
import CategorieItem from '../CategorieItem/index'
import { useSelector, useDispatch } from 'react-redux'
import { loadCategory } from '../../store/asyncActions/products'

export default function Categories() {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  console.log(categories);

  const categoryIsFiltered = [...new Set(categories.map((value) => value.category))];
  

  useEffect(() => {
    dispatch(loadCategory);
  }, []);

  return (
    <section>
      <div className='wrapper'>
        <div className={s.categ_box}>
          <h3>Categories</h3>
          <button>All categories</button>
        </div>
        <div className={['wrapper', s.container].join(' ')}>
          {
            categoryIsFiltered.map(category => <CategorieItem key={category} category={category}/>) 
          }
        </div>
      </div>
    </section>
  )
}
{/*categoryIsFiltered.map((val, id) => {
              return (
                <div key={id}>{val}</div>
              )
            }) */}