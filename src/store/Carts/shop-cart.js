import * as cartsType from '../Carts/cart'

const INITIAL_STATE = ({
    products: [
        {
            id:1,
            imgsrc: 
            "https://apollo-singapore.akamaized.net/v1/files/kqa72thi5mrk-PK/image;s=300x600;q=60",
            rs: '7,000',
            text:'Swiss balance',
            
        },
        {
            id:2,
            imgsrc: 
            "https://apollo-singapore.akamaized.net/v1/files/j9vc7p7fph8i2-PK/image;s=300x600;q=60",
            rs: '57.000',
            text: 'Sell Iphone 7 plus new condition',
    
        },
        {
            id:3,
            imgsrc: 
            "https://apollo-singapore.akamaized.net/v1/files/b3engz1hyfgt3-PK/image;s=300x600;q=60",
            rs:'360,500',
            text: 'Honda city 2014 on installments',
        },
        {
            id:4,
            imgsrc: 
            "https://apollo-singapore.akamaized.net/v1/files/gtw4shlpp2m8-PK/image;s=300x600;q=60",
            rs: '105',
            text: '12w led bulb'
        },
        {
            id:5,
            imgsrc:
            "https://apollo-singapore.akamaized.net/v1/files/oj32noffp8vp2-PK/image;s=300x600;q=60",
            rs: '440.000',
            text: 'Mac Book pro 16 inch'
        },
        {
            id:6,
            imgsrc: 
            "https://apollo-singapore.akamaized.net/v1/files/0gn6tsjhuzgw-PK/image;s=300x600;q=60",
            rs: '117,000',
            text: 'Deluxe 125 cc'
        },
        {
            id:7,
            imgsrc:
            "https://apollo-singapore.akamaized.net/v1/files/jiycn30og8at3-PK/image;s=300x600;q=60",
            rs: '22,000',
            text: 'Iphone 6 Plus'
        },
        {
            id:8,
            imgsrc: 
            "https://apollo-singapore.akamaized.net/v1/files/rwhpcgant2qm1-PK/image;s=300x600;q=60",
            rs: '250,000',
            text: '2020 3 km'
        },
    ],
 
}
   
)




const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartsType.ADD_TO_CARD:
            return {}
             default:
                 return state;
    }

}

export default cartReducer;