import NavBar from "../NavBar";
import HeaderSection from "../HeaderSection";
import Categories from "../Categories";
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import { getProducts } from '../../requests/categ_req'
import DiscountSection from "../DiscountSection";
import PromoContainer from "../PromoContainer";
import Footer from "../Footer";

function App() {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getProducts(setCategories);
  }, []);
console.log(categories);

  return (
    <Context.Provider value={{categories}}>
      <NavBar />
      <HeaderSection />
      <Categories />
      <DiscountSection/>
      <PromoContainer/>
      <Footer/>
    </Context.Provider>
  );
}

export default App;
