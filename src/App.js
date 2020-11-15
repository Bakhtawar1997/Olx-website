import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch,  Route, Redirect } from 'react-router-dom'
import {Navbar, Sec_header} from './components/navbar';
import Cartss from './components/redux';
import {Footer, Xyz} from './components/footer'
import Slider from './components/slider'
import Margin from './components/margin';
import ChangePg from './components/button'







const App =() => {
  return(
    <>
    {/* <ChangePg /> */}
    {/* <Cartss /> */}
     <Switch>
   <Route exact path = '/' component={Margin}/>
   <Route exact path = '/Navbar' component={Navbar}/>
   <Route exact path='/Cartss' component={Cartss}/>
   <Route exact path='/footer' component={Footer} />
   <Route exact path='/Slider' component={Slider} />
   <Route exact path='/ChangePg' component={ChangePg} />


   <Redirect to='/' />
</Switch>
    
    </>
  )
}



export default App;