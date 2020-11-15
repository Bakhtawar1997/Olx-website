import React from 'react'
import { connect } from 'react-redux'
import Header from './index'
import { ConnectedRouter as Route } from 'react-router-dom'
import Margin from './margin'





const Cartss =({products}) => {
  return(
    <>
     <div class="container">
        <h4 className='heading'>Fresh recommendations</h4> 
        </div> 
        
    <div className='col-10 mx-auto'>
    <div className='row' >

    {products.map(proud => (
      <Header key={proud.id}  productData={proud}/>
    ))}
    
    </div>
    </div>
  
    </>
  )
}

const mapStateToProps = state => {
  return{
    products:state.shop.products,

  }
}

export default connect(mapStateToProps)(Cartss);