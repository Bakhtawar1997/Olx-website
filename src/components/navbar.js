import React from 'react';
import logo from '../img/log.png'
import '../App.css'

const Navbar = () => {
    return(
        <>
             
       <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light">
<div className='container-fluid'>
<img className="navbar-brand" src={logo} style={{color: 'grey'}} width='45' />
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse justify-content-sm-start" id="navbarSupportedContent">
  <ul className="navbar-nav">

  <li className="nav-item dropdown">
     
     <div className='input-icons'>
         <i className="fa fa-search fww " style={{fontSize: '24px'}} />
         <a className="form-control mr-sm-2 input-field"   id="navbarDropdown" data-toggle="dropdown" aria-label="Pakistan" aria-haspopup="true" aria-expanded="false">
         <i className="fa fa-angle-down side" style={{fontSize: '36px'}} />
         Pakistan
         </a>
         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
       <a className="dropdown-item tet" href="#">Use current location.</a>
       <div className="dropdown-divider" />
       <a className="dropdown-item" href="#">Lahore</a>
       <a className="dropdown-item" href="#">Islamabad</a>
       <a className="dropdown-item" href="#">Punjab</a>
     </div>
     </div>
     </li>
  </ul>
  {/* <div class="mx-auto order-0 wtd" > */}
        <a class=" mx-auto wtd" >
        <div className="input-group mb-3">
        <input type="text" width='100%' className=" form-control ipu" placeholder="Find Cars, Mobile Phones and More..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        {/* <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div> */}
         <span className="input-group-text" style={{backgroundColor: 'black'}} id="basic-addon2">
          <i className="fa fa-search " style={{fontSize: '24px'}} style={{color: 'white'}}/>
          </span>
      </div>
      </a>
        
        {/* </div> */}
      
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto" >
            <div className='ste' >
              <li >
                <a className="nav-link  home " > Login </a>
              </li>
              <button className='nav-link dgn'><span className='logn'><b className='sell'><i className="fa fa-plus plu" style={{fontSize: '15px'}} />SELL</b></span></button>
              </div>
            </ul>
            </div>
            </div>
    </nav>
    <Sec_header />
        </>
    )
}


function Sec_header(){
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="navbar-nav">
            <div className="dropdown">
          <a className="nav-link active dd-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
          <i className="fa fa-angle-down side changing" style={{fontSize: '36px'}} style={{display: 'flex'}} />
          </a>
    
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
              <a className="nav-link" href="#">Mobile Phone</a>
              <a className="nav-link" href="#">Cars</a>
              <a className="nav-link" href="#">Motorcycles</a>
              <a className="nav-link" href="#">Houses</a>
              <a className="nav-link" href="#">TV-Video-Audio</a>
              <a className="nav-link" href="#">Tablets</a>
              <a className="nav-link" href="#">Land & plots</a>
  
  
  
  
              
            </div>
          
        </nav>
   </>     

)
} 

export {
    Navbar,
    Sec_header
  }
