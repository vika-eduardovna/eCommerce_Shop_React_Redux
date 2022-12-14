import React, { useState, useEffect } from 'react'
import s from './style.module.sass'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add_to_cart_action } from '../../store/reducer/cartReducer';

export default function ProductDescriptionPage() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const { title, description, price, discountPercentage, thumbnail } = product;
  const { id } = useParams();
  const full_price = (price - price * discountPercentage / 100).toFixed(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [])


  return (
    <section className={['wrapper', s.container].join(' ')}>
      <h5>{title}</h5>
      <div className={s.item}>
        <div className={s.img_block}>
          <img src={thumbnail} alt={title} />
        </div>

        <div className={s.descr_block}>
          <div className={s.price}>
            {
              discountPercentage === ''
                ? <div>{price}</div>
                : <>
                  <div className={s.full_price}>{full_price}€</div>
                  <div className={s.price_disc}>{price}€</div>
                  <div className={s.discount}>-{discountPercentage}%</div>
                </>
            }
          </div>
          <button className={s.btn}>Add to cart</button>
          <div className={s.divider}></div>
          <div className={s.header_description}>Description</div>
          <div className={s.description}>{description}</div>
        </div>
      </div>
    </section>
  )
}
