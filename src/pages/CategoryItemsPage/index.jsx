import React, { useState, useEffect } from 'react'
import s from './style.module.sass'
import ProductContainer from '../../components/ProductContainer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sort_products_action,  price_range_action} from '../../store/reducer/productsReducer'
import Product from '../../components/Product'
import { loadProductsPerCategory } from '../../store/asyncActions/products'


export default function CategoryItemsPage() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  //const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceParams, setPriceParams] = useState({ min: -Infinity, max: Infinity });
  //const priceSearch = () => {
    //setFilteredProducts(prev => prev.map(product => {
      //const {min, max} = priceParams;
      //product.show_flg = product.price >= min && product.price <= max;
      //return product
    //}))
  //}
  useEffect(() => {
    dispatch(loadProductsPerCategory(category))
  }, [])

  useEffect(() => {
    dispatch(price_range_action(priceParams))
  }, [priceParams]);
  

  const maxInput = event => {
    setPriceParams(prev => ({...prev, max: +event.target.value || Infinity}));
  }

  const minInput = event => {
    setPriceParams(prev => ({...prev, min: +event.target.value || -Infinity}));

  }

  const sortOnChange = e => {
    const value = e.target.value;
    dispatch(sort_products_action(value))
  }

  const category_title = category[0].toUpperCase() + category.slice(1)

  return (
    <section className='wrapper'>
      <h3 className={s.header}>{category_title}</h3>
      <div className={s.sorting_container}>
        <div className={s.price_box}>
          <span className={s.price}>Price</span>
          <input type="number" placeholder='from' onChange={minInput} value={priceParams.min}/>
          <input type="number" placeholder='to' onChange={maxInput} value={priceParams.max}/>
        </div>

        <div className={s.discount_box}>
          <span className={s.price}>Discount %</span>
          <input type="checkbox" name="discount" />
        </div>

        <div className={s.sort_by}>
          <span className={s.price}>Sort by:</span>
          <select defaultValue={'DEFAULT'} onChange={sortOnChange}>
            <option value="DEFAULT" disabled>None</option>
            <option value="title">Name</option>
            <option value="ascending">Price (low to high)</option>
            <option value="descending">Price (high to low)</option>
          </select>
        </div>
      </div>
      <ProductContainer />
    </section>
  )
}
