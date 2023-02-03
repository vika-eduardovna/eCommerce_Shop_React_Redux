import React, { useState, useEffect } from 'react'
import s from './style.module.sass'
import { loadAllProducts } from '../../store/asyncActions/products';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card';


export default function AllProductsPage() {
  const products = useSelector(state => state.all_products);
  const [filter, setFilter] = useState('');
  const searchText = e => setFilter(e.target.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllProducts())
  }, []);


  let dataSearch = products.filter(item => {
    return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  });

  return (
    <section className={['wrapper', s.container].join(' ')}>
      <div className={s.header_block}>
        <h3 className={s.header}>Gallery</h3>
        <div className={s.input}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type='text'
            name='search'
            value={filter}
            placeholder='Search...'
            onChange={searchText.bind(this)} />
        </div>
      </div>
      <div className={s.prod_container}>
        {
          dataSearch.map(el => <Card key={el.id} {...el} />)
        }
      </div>
    </section>
  )
}



