import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import NavBar from './NavBar'
import Cart from './Cart'
import { useState } from 'react'

//This component displays the app and routes the app paths
export default function RouteSwitcher() {
    //Store the cart state here to pass down between all pages
    const [cartItems, setCartItems] = useState([]);
    //Store cart size
    const [cartSize, setCartSize] = useState(0);

    //Pass this function down to add items to the master cart, update cart size
    const addToCart = (item) => {
        const newCart = cartItems;
        newCart.push(item);
        setCartItems(newCart);
        setCartSize(cartSize + 1);
    }

    return (
        <BrowserRouter>
        <div className='App'>
            {/* NavBar always visible */}
            <NavBar cartSize={cartSize}/>
            <Routes>
            {/* Create routes from paths */}
            <Route path='/' element={<Home/>} />
            <Route path='/shop'element={<Shop addToCart={addToCart}/>}/>
            <Route path='/cart'element={<Cart cartItems={cartItems}/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}