import React, { useEffect } from 'react'
import s from './style.module.sass'
import { Link } from 'react-router-dom'
import { loadImagePerCategory } from '../../store/asyncActions/categ_images'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


export default function CategorieItem({ category }) {
  const link = `/category/${category}`;
  const images = useSelector(state => state.categ_images);
  const dispatch = useDispatch();
  const category_title = category[0].toUpperCase() + category.slice(1)

  useEffect(() => {
    dispatch(loadImagePerCategory(category))
  }, [])
  
  console.log(images);
 
  return (
    <div className={s.item}>
      <img src={images[0]} alt={category} />
      <Link to={link}><h5>{category_title}</h5></Link>
    </div>
  )
}
