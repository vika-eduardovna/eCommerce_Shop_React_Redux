import React, { useEffect } from 'react'
import s from './style.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import { loadProductsPerCategory } from '../../store/asyncActions/products'
import Product from '../Product'

export default function ProductContainer() {

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsPerCategory)
  }, [])

  return (
    <div className={['wrapper', s.container].join(' ')}>
      {
        products.map(el => <Product key={el.id} {...el} />)
      }
    </div>
  )
}
