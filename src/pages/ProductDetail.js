import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const {id} = useParams();
  // let item = products.find(p => p.id === id)
  return (
    <>
    <Header/>
     <div>
<h1>
  
  product detail {id}
  </h1>
     </div>
    </>
  )
}

export default ProductDetail
