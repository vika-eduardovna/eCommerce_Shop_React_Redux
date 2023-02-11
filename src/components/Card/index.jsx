import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass'
import { Rate } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { add_to_cart_action } from '../../store/reducer/cartReducer'

export default function Card({ id, title, price, image, stock, rating }) {
  const link = `/product/${id}`;
  const stock_style = stock <= 30 ? '#e5d2e1' : '#92cbd0 ';
  const stock_content = stock <= 30 ? 'low stock' : 'in stock';
  const dispatch = useDispatch();
  const addToCart = () => dispatch(add_to_cart_action(id, title, price, image));
  return (
    <>
      <div className={s.card}>
        <Link to={link}>
          <div className={s.img_block}>
            <img src={image} alt="" />
          </div>
          <div className={s.title}>{title}</div>
          <div>{price} €</div>
          <div className={s.shipping}>Eligible for shipping to Mars or somewhere else</div>
        </Link>
        <div className={s.rating_box}>
          <Rate
            disabled
            allowHalf
            defaultValue={rating}
            value={rating}
          />
          <div className={s.rate_icon}> <EyeOutlined /> {rating}</div>
        </div>

        <div className={s.info_block}>
          <div style={{
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'fontSize': '12px',
            'width': '80px',
            'height': '30px',
            'borderRadius': '7px',
            'backgroundColor': stock_style
          }}>
            {stock_content}
          </div>
          <button onClick={addToCart} className={s.cart}>
            <ShoppingCartOutlined />
          </button>
        </div>
      </div>

    </>
  );
} 
