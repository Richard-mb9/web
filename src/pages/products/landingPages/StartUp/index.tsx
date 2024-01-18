import React from 'react'
import './index.css'
import Top from './compoents/Top'
import MarketingComponent from './compoents/MarketingComponent'
import Footer from '../../../components/Footer'
import SolutionsForAllProducts from './compoents/SolutionsForAllProducts'
import ServiceCard from './compoents/ServiceCard'

export default function StartUp() {
  return (
    <>
      <Top />
      <MarketingComponent />
      <SolutionsForAllProducts />
      <Footer />
    </>
  )
}