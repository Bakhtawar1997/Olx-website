import * as cartsType from '../Carts/cart.js'
//import carts from '../Carts/cart'

export const addToCard = (itemID) => {
   
    return {
        type: cartsType.ADD_TO_CARD,
        payload:{
            id: itemID
        }
}

}