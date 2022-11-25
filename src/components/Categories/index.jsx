import React, {useEffect} from 'react'
import s from './style.module.sass'
import CategorieItem from '../CategorieItem/index'
import { useSelector, useDispatch } from 'react-redux'
import { loadCategory } from '../../store/asyncActions/products'

export default function Categories() {
  const categories = useSelector(state => state.categories);
  
  const dispatch = useDispatch();
  
  //const test_arr = categories.map(({category})=> category);
  //const unique_array = [...new Set(test_arr)];
  //console.log(unique_array);
  

  useEffect(()=>{
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
            categories.map(el => <CategorieItem key={el.id} {...el} />)
          }
        </div>
      </div>
    </section>
  )
}