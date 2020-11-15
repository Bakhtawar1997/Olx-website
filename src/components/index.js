import React from 'react';
import { link } from 'react-router-dom'
import '../components/carts.css'

const Header =({productData}) =>{
  return(
    <>
    
<div className='col-md-3'>
  <div className='row'>
        <div className="card" style={{width: '17rem'} }>
          <img src={productData.imgsrc} className='img' alt={productData.imgsrc}  />
        <div class="card-body">
    <h5 class="card-title">Rs {productData.rs}</h5>
    <p class="card-text">{productData.text}</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
     </div>
     </div>
     </div>
    
    </>
  )
}



export default Header;