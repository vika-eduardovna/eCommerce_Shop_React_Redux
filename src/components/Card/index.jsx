import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass'
import { Rate } from 'antd';

export default function Card({ id, title, price, image, stock, rating }) {
  const link = `/product/${id}`
  return (
    <Link to={link}>
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
    </Link>
  );
} 
