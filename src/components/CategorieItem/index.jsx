import React from 'react'
import s from './style.module.sass'
import { Link } from 'react-router-dom'

export default function CategorieItem({ image, name }) {

  return (
    <div className={s.item}>
      <img src={image} alt="image" />
      <Link to="/home"><h5>{name}</h5></Link>
    </div>
  )
}
