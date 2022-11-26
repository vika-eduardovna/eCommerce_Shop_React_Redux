import React from "react"
import s from './style.module.sass'
import { Link } from "react-router-dom"
import logo from './media/logo.png'


export default function NavBar() {

    return (
        <nav>
            <div className={['wrapper', s.navbar].join(' ')}>
                <div className={s.logo}>
                    <Link to="/home"><img src={logo} alt="logo" /></Link>
                    <div className={s.catalog}>Catalog</div>
                </div>
                <ul className={s.nav_links}>
                    <Link to="/all_categories">Categories</Link>
                    <Link to="/coupon">Coupon</Link>
                    <Link to="/actions">Actions</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/cart"><i class="fa-solid fa-bag-shopping"></i></Link>
                </ul>
            </div>
        </nav>
    );

}