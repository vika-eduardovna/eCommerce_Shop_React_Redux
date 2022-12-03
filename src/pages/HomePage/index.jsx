import React from 'react'
import HeaderSection from '../../components/HeaderSection'
import Categories from '../../pages/Categories/index'
import DiscountSection from '../../components/DiscountSection'
import PromoContainer from '../../components/PromoContainer'

export default function HomePage() {
  return (
    <div>
        <HeaderSection/>
        <Categories/>
        <DiscountSection/>
        <PromoContainer/>
    </div>
  )
}
