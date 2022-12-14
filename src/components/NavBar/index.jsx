import React, { useState } from "react"
import s from './style.module.sass'
import { NavLink } from 'react-router-dom'
import logo from './media/logo.png'
import { useSelector } from 'react-redux';

export default function NavBar() {
    const cart = useSelector(state => state.cart);
    const [filter, setFilter] = useState('');
    const searchText = e => setFilter(e.target.value);
    const count = cart.reduce((prev, { count }) => prev + count, 0);
    //let dataSearch = categories.filter(item => {
    //return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    //})
    return (
        <nav>
            <div className={['wrapper', s.navbar].join(' ')}>
                <div className={s.logo}>
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>

                </div>
                <div className={s.catalog}>Catalog</div>
                <div className={s.input}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input
                        type='text'
                        name='search'
                        value={filter}
                        placeholder='Search...'
                        onChange={searchText} />
                </div>
                <ul className={s.nav_links}>
                    <NavLink to="/categories">Categories</NavLink>
                    <NavLink to="/coupon">Coupon</NavLink>
                    <NavLink to="/actions">Actions</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                    <NavLink to="/cart">
                        <div className={s.counter}>
                            <i class="fa-solid fa-bag-shopping"></i>
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