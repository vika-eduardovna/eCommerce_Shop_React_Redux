import React from 'react';
import s from './style.module.sass'
import { Rate } from 'antd';

export default function Card({ title, price, image, stock, rating }) {
  return (
    <div className={s.card}>
      <div className={s.img_block}>
        <img src={image} alt="" />
      </div>
      <div className={s.title}>{title}</div>
      <div>{price} €</div>
      <div className={s.shipping}>Eligible for shipping to Mars or somewhere else</div>
      <div className={s.rating_box}>
        <Rate
          disabled
          allowHalf
          defaultValue={rating}
          value={rating}
          />


      </div>
    </div>
  );
} 
