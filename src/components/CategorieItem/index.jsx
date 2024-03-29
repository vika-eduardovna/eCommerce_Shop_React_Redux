import React, { useEffect, useState } from 'react'
import s from './style.module.sass'
import { Link } from 'react-router-dom'
import { loadImagePerCategory } from '../../store/asyncActions/categ_images'


export default function CategorieItem({ category }) {
  const link = `/category/${category}`;
  const category_title = category[0].toUpperCase() + category.slice(1)
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImagePerCategory(category, setImages);
  }, [category]);

  return (
    <Link to={link}>
      <div className={s.item}>
        <img src={images[0]} alt={category} />
        <h5>{category_title}</h5>
      </div>
    </Link>

  )
}
