import React from 'react'
import { Banner } from '../../components/Banner'
import { About } from '../../components/About'
import { ProductsPreview } from '../../components/ProductsPreview'
import { RideWithUs } from '../../components/RideWithUs'
import { PartnerWithUs } from '../../components/PartnerWithUs'
 const Home=()=> {
  return (
    <>  
    <Banner/>
    <ProductsPreview/>
    <PartnerWithUs/>
    <RideWithUs/>
    <About/>
    </>
  
  )
}
export default Home