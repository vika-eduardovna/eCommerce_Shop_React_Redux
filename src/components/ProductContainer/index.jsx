import React, { useEffect } from 'react'
import s from './style.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../Product'
import { useParams } from "react-router-dom";

export default function ProductContainer() {
  const { category } = useParams();
  const products = useSelector(state => state.products);
  console.log(products);
  const dispatch = useDispatch();

  const loadProductsPerCategory = async dispatch => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json()
    const payload = data.products.map(({ title, price, discountPercentage, images }) => ({
      title, price, discountPercentage,
      image: images[1]
    }))
    dispatch({ type: 'LOAD_PRODUCTS', payload })
  }

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
