import React, { useEffect } from 'react'
import s from './style.module.sass'
import CategorieItem from '../../components/CategorieItem/index'
import { useSelector, useDispatch } from 'react-redux'
import { loadCategories } from '../../store/asyncActions/categories'

export default function Categories() {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  
  //const categoryIsFiltered = [...new Set(categories.map((value) => value.category))];
  
  useEffect(() => {
    dispatch(loadCategories);
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
            categories.map(category => <CategorieItem key={category} category={category}/>) 
          }
        </div>
      </div>
    </section>
  )
}
