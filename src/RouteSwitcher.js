import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './Home'
export default function RouteSwitcher() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop'element={'Shop'}/>
            </Routes>
        </BrowserRouter>
    )
}