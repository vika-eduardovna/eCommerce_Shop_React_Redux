import NavBar from '../NavBar'
import { useState, useEffect } from 'react'
import Footer from '../Footer'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import AllCategoriesPage from '../../pages/AllCategoriesPage'
import CategoryItemsPage from '../../pages/CategoryItemsPage'
import ProductItemPage from '../../pages/ProductItemPage'
import CartPage from '../../pages/CartPage'
import NotFoundPage from '../../pages/NotFoundPage'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/all_categories" element={<AllCategoriesPage />} />
        <Route path="/category_items" element={<CategoryItemsPage />} />
        <Route path="/product_page" element={<ProductItemPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
