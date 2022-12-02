import React from 'react'
import s from './style.module.sass'
import { Link } from 'react-router-dom'

export default function CategorieItem({ category, thumbnail }) {
  const link = `/category/${category}`

  return (
    <div className={s.item}>
      <img src='https://venpa.in/images/category/20220223015113.jpg' alt={category} />
      <Link to={link}><h5>{category}</h5></Link>
    </div>
  )
}
