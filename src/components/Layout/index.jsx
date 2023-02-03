import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import NavBar from '../NavBar'
import s from './style.module.sass'

export default function Layout() {
    return (
        <>
            <NavBar />
            <main className={s.main_content}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
