import React from "react"
import s from './style.module.sass'
import { NavLink } from 'react-router-dom'
import logo from './media/logo.png'
import { useSelector } from 'react-redux';

export default function NavBar() {
    const cart = useSelector(state => state.cart);
    const count = cart.reduce((prev, { count }) => prev + count, 0);
    const active_style = ({isActive}) => isActive ? s.active : ''

    return (
        <nav>
            <div className={['wrapper', s.navbar].join(' ')}>
                <div className={s.logo}>
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                    <div className={s.catalog}>Catalog</div>
                </div>
                
                
                <ul className={s.nav_links}>
                    <NavLink className={active_style} to="/categories">Categories</NavLink>
                    <NavLink className={active_style} to="/coupon">Coupon</NavLink>
                    <NavLink className={active_style} to="/all_products">Gallery</NavLink>
                    <NavLink className={active_style} to="/contacts">Contacts</NavLink>
                    <NavLink to="/cart">
                        <div className={s.counter}>
                            <i className ="fa-solid fa-bag-shopping"></i>
                            {
                                !!count && <span className={s.count}>{count}</span>
                            }
                        </div>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );

}