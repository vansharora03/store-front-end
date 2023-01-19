import NavBar from './NavBar';
import { useState } from 'react';
import ShopView from './ShopView';

export default function Shop() {
    const [items, setItems] = useState([]);
    return (
        <div className="Shop">
            <NavBar/>
            <h1 className="page-title">Shop</h1>
            <ShopView items={items}/>
        </div>
    );
}