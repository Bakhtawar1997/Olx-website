import React from 'react'
import '../components/footer.css'
import btn from '../img/btn.webp'
import btn2 from '../img/btn 2.webp'
import footer_slider from '../img/footer slider.webp'


function Footer(){
    return(
     
<>
<Xyz />
<br />
<br />
    <div className='containerss navbar-light bg-light '>
      <div className='d-sm-inline-flex'>
    
     <ul >
       <li  className='my-2 ' >POPULARCATEGORIES</li>
       <li>Cars</li>
       <li>Flats for rent</li>
       <li>Jobs</li>
       <li>Mobile Phones</li>
     </ul>
     <ul>
       <li className='my-2'>TRENDINGSEARCHES</li>
       <li>Bikes</li>
       <li>Watches</li>
       <li>Books</li>
       <li>Dogs</li>
       </ul>
     <ul>
       <li className='my-2'>ABOUTUS </li>
       <li>About OLX Group</li>
       <li>OLX Blog</li>
       <li>Contact Us</li>
       <li>OLX for Businesses</li>
       </ul>
     <ul>
       <li className='my-2'>OLX </li>
       <li>TRENDING SEARCHES</li>
       <li>ABOUT US</li>
       <li>OLX</li>
       <li></li>
     </ul>
     <ul>
       <li className='my-2'>FOLLOW US</li>
       <i className="fa fa-facebook icon"></i>
       <i className="fa fa-twitter icon"></i>
       <i className="fa fa-instagram icon"></i>
       <li>
         <img className='igm' src={btn} width='90'/>
         <img className='igm' src={btn2} width='90'/>

         {/* <button> <i className="fa fa-apple set"><span className='up'>Download on the </span><br />App Store</i></button> */}
     {/* <button><i className="fa fa-apple set up">Download on the <br/> App Store</i></button> */}
     {/* <button className='up font'>Download on the<br /><i className="fa fa-apple up"><span>App Store</span></i></button> */}
       </li>
     </ul>
    </div>
    </div>
    <br />
    <div className='float-ms-inline'>
   
      <div className='buttom'>
        <p className='left'>Other Countries India - South Africa - Indonesia</p>
        <p className=' rights'>Free Classifieds in Pakistan. © 2006-2020 OLX</p>
        </div>
        </div>

        
    
        {/* <p className= 'ml-auto'>Other Countries India - South Africa - Indonesia
       <span className='mr-auto'>Free Classifieds in Pakistan. © 2006-2020 OLX </span>
       </p> */}
      
     
    
       
     
   </>
    
    )
}


 export default Footer;

function Xyz(){
  return(
    <>
    <div className='setup navbar-light bg-light ' style={{maxWidth: '100%'}}>
    <div className='d-sm-inline-flex'>
  <div className='img-fluid flex'> <img src={footer_slider} width='30%'/>
  <div><h2 className='hh my-2 img-fluid'>TRY THE OLX APP</h2>
  <h4 className='hset'> Buy, sell and find just about anything using <br/> the app on your mobile.</h4>
  </div>
  <div className='ml-auto'>
    <h6 className='bd' > GET YOUR APP TODAY</h6>
 <img className='tytt' src={btn} width='100' height='40'/>
  <img className='tytt' src={btn2} width='100' height='40'/>
  
  </div>
  {/* <button className='sd'>chrk</button>
  <button className='sd'>vjbk</button>
  */}
  </div>
  </div>
  </div>
  </>
  )
}
// export default Footer;
export {
  Footer,
  Xyz,
}