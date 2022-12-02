import React from "react"
import s from './style.module.sass'
import { NavLink } from 'react-router-dom'
import logo from './media/logo.png'


export default function NavBar() {
    return (
        <nav>
            <div className={['wrapper', s.navbar].join(' ')}>
                <div className={s.logo}>
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                    <div className={s.catalog}>Catalog</div>
                </div>
                <ul className={s.nav_links}>
                    <NavLink to="/categories">Categories</NavLink>
                    <NavLink to="/coupon">Coupon</NavLink>
                    <NavLink to="/actions">Actions</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                    <NavLink to="/cart"><i class="fa-solid fa-bag-shopping"></i></NavLink>
                </ul>
            </div>
        </nav>
    );

}