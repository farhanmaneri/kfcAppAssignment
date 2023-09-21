import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function ProductInfo() {
  const [productDetail, setProductDetail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  let { productId } = useParams();
  console.log("info items=>", productId)

  const fetchData= async ()=>{
    setLoading(true);
    try{
      let res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if(res.ok){
        let data = await res.json()
        setProductDetail(data)
        // console.log(data)        
      }else{
        throw new Error('something went wrong!')
      }
    }catch(error){
      setError(error.message)
    }finally{
      setLoading(false)
    }
  }
  useEffect(() => {
   fetchData()
  }, [productId])
  
  // if(!items)return(<h1>loading ....</h1>)
  console.log("info after items====>", productId)
  return (
    <div>
      {/* {
        items && items.map(item=>(<h1>{item.title}</h1>))
      } */}

      {productDetail?.title}
    </div>
  )
}
