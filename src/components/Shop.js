import { useEffect, useState } from 'react';
import ShopView from './ShopView';
import data from '../assets/data/shoptItemData';

export default function Shop() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(data);
    }, [])
    return (
        <div className="Shop">
            <h1 className="page-title">Shop</h1>
            <ShopView items={items}/>
        </div>
    );
}