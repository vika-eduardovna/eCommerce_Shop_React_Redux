import React from 'react'
import s from './style.module.sass'

export default function CategorieItem({image, category}) {
  console.log(category);
  return (
    <div className={s.item}>
        <img src={image} alt="image" />
        <h5>{category}</h5>
    </div>
  )
}
