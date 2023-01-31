import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import CategoryItemsPage from '../../pages/CategoryItemsPage'
import ProductDescriptionPage from '../../pages/ProductDescriptionPage'
import CartPage from '../../pages/CartPage'
import NotFoundPage from '../../pages/NotFoundPage'
import Layout from '../Layout'
import Categories from '../../pages/Categories/index'
import ContactsPage from '../../pages/ContactsPage'
import AllProductsPage from '../../pages/AllProductsPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='category/:category' element={<CategoryItemsPage />} />
          <Route path='product/:product_id' element={<ProductDescriptionPage />} />
          <Route path='/all_products' element={<AllProductsPage/>}/>
          <Route path='/contacts' element={<ContactsPage/>}/>
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
