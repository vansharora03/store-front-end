import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import NavBar from './NavBar'
export default function RouteSwitcher() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop'element={<Shop/>}/>
            </Routes>
        </BrowserRouter>
    )
}