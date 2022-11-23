import React from 'react'
import HeaderSection from '../../components/HeaderSection'
import Categories from '../../components/Categories'
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
