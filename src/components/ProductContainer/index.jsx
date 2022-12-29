import React, { useEffect } from 'react'
import s from './style.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../Product'
import { useParams } from "react-router-dom";
import {loadProductsPerCategory} from '../../store/asyncActions/products'

export default function ProductContainer() {
  const { category } = useParams();
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsPerCategory(category))
  }, [])

  return (
    <div className={['wrapper', s.container].join(' ')}>
      {
        products.map(el => <Product key={el.id} {...el} />)
      }
    </div>
  )
}
