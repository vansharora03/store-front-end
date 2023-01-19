import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
export default function RouteSwitcher() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop'element={<Shop/>}/>
            </Routes>
        </BrowserRouter>
    )
}