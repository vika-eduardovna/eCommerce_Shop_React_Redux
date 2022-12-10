import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import CategoryItemsPage from '../../pages/CategoryItemsPage'
import ProductDescriptionPage from '../../pages/ProductDescriptionPage'
import CartPage from '../../pages/CartPage'
import NotFoundPage from '../../pages/NotFoundPage'
import Layout from '../Layout'
import Categories from '../../pages/Categories/index'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='category/:category' element={<CategoryItemsPage />} />
          <Route path='product/:id' element={<ProductDescriptionPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
