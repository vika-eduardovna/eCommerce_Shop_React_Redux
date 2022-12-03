import React, { useState, useEffect } from 'react'
import s from './style.module.sass'
import { useParams } from 'react-router-dom'

export default function ProductDescriptionPage() {

  const [product, setProduct] = useState({});
  const { title, description, price, discountPercentage, thumbnail } = product;
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
      
  }, [])


  return (
    <section className={['wrapper', s.container].join(' ')}>
      <h5>{title}</h5>
      <div className={s.img_block}>
        <img src={thumbnail} alt={title} />
      </div>

      <div className={s.descr_block}>
        <div className={s.price_block}>
          <div>{price}</div>
          <div>{discountPercentage}</div>
        </div>
        <button>Add to cart</button>
        <div className={s.divider}></div>
        <div>Description</div>
        <div>{description}</div>
      </div>
    </section>
  )
}
