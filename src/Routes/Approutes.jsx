import React from 'react'
import Cart from '../Component/Cart'
import Home from '../Component/Home'

const Approutes = [
    {
        path : "/",
        name : 'Home',
        exact:true,
        element :<Home/>
    },
    {
        path : "/cart",
        name : 'Cart',
        exact:true,
        element :<Cart/>
    },
]
export default Approutes