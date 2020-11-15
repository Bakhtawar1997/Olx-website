import React from 'react'
import slider from '../img/slider.jpg'
import poster from '../img/poster.png'


function Slider(){
  return(
    <>
    <img src={slider} className="img-fluid" with-='100%'/>
    <img src={poster} className=' img-fluid center'  />

    </>
  )
}



export default Slider;