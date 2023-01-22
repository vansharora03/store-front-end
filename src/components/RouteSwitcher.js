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
        //Add to cartItems
        const newCart = cartItems;
        if(item.quantity) {
            item.quantity++;
        }
        else {
            item.quantity = 1;
            newCart.push(item);
        }
        setCartItems(newCart);
        //Update cart size
        setCartSize(cartSize + 1);
    }

    //Removes an item from the master cart
    const removeFromCart = (item) => {
        //Remove from cartItems
        let newCart = cartItems;

        //Get index of the item to remove
        let removeIndex = 0;
        let i = 0;
        newCart.forEach(currItem => {
            if(currItem.id === item.id) {
                removeIndex = i;
            }
            i++;
        })
        //Reduce quantity of removed item
        newCart[removeIndex].quantity--;
        //Remove from newCart if quantity is 0
        if(newCart[removeIndex].quantity <= 0) {
            newCart.splice(removeIndex, 1);
        }

        //Update cartItems
        setCartItems(newCart);

        //Update cartSize
        setCartSize(cartSize - 1);
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
            <Route path='/cart'element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}