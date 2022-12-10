import React, { useState } from "react"
import s from './style.module.sass'
import { NavLink } from 'react-router-dom'
import logo from './media/logo.png'

export default function NavBar() {

    const [filter, setFilter] = useState('')
    const searchText = e => setFilter(e.target.value)
    
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
                    <NavLink to="/cart"><i class="fa-solid fa-bag-shopping"></i></NavLink>
                </ul>
            </div>
        </nav>
    );

}