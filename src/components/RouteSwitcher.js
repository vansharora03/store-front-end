import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import NavBar from './NavBar'
import { useState } from 'react'
export default function RouteSwitcher() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <BrowserRouter>
        <div className='App'>
            <NavBar/>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop'element={<Shop/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}