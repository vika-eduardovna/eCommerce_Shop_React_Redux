import React, { useState, useEffect } from 'react'
import s from './style.module.sass'
import { loadAllProducts } from '../../store/asyncActions/products';
import { useSelector, useDispatch } from 'react-redux';

export default function AllProductsPage() {
  const products = useSelector(state => state.products);
  const [filter, setFilter] = useState('');
  const searchText = e => setFilter(e.target.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllProducts)
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
            onChange={searchText} />
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">

              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">

              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
