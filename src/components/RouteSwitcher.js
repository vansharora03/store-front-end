import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import NavBar from './NavBar'
import { useState } from 'react'

//This component displays the app and routes the app paths
export default function RouteSwitcher() {
    //Store the cart state here to pass down between all pages
    const [cartItems, setCartItems] = useState([]);

    //Pass this function down to add items to the master cart
    const addToCart = (item) => {
        const newCart = cartItems;
        newCart.push(item);
        setCartItems(newCart);
    }

    return (
        <BrowserRouter>
        <div className='App'>
            {/* NavBar always visible */}
            <NavBar/>
            <Routes>
            {/* Create routes from paths */}
            <Route path='/' element={<Home/>} />
            <Route path='/shop'element={<Shop addToCart={addToCart}/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}