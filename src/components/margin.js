import React from 'react'
import {Navbar, Sec_header} from './navbar';
import Cartss from './redux';
import {Footer, Xyz} from './footer'
import Slider from './slider'
import ChangePg from './button'


const Margin = () => {
    return(
        <>
        <Navbar />
        <Slider />
        <Cartss />
        <br />
        <ChangePg />
        <Footer />
        </>
    )
}


export default Margin;