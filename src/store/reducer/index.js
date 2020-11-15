import { combineReducers } from 'redux'
//import * as abcdTypes from '../Carts/cart.js'
import shopCart from '../Carts/shop-cart'



const rootReducer = combineReducers({
    shop: shopCart,
    //chk: abcdTypes,

});

export default rootReducer;