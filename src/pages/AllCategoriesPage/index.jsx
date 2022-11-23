import React from 'react'
import s from './style.module.sass'
import CategorieItem from '../../components/CategorieItem'
import { useSelector } from 'react-redux'
import Categories from '../../components/Categories'

export default function AllCategoriesPage() {
  return (
    <div>
      <Categories/>
    </div>
  )
}
