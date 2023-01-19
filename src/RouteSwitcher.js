import {Route, BrowserRouter, Routes} from 'react-router-dom'
import App from './App'

export default function RouteSwitcher() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/shop'element={'Shop'}/>
            </Routes>
        </BrowserRouter>
    )
}