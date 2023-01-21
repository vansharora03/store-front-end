import { useEffect, useState } from 'react';
import ShopView from './ShopView';
import data from '../assets/data/shoptItemData';

export default function Shop() {
    const [items, setItems] = useState([]);
    const [viewable, setViewable] = useState([]);
    useEffect(() => {
        setItems(data);
        setViewable(data);
    }, [])

    return (
        <div className="Shop">
            <h1 className="page-title">Shop</h1>
            <ShopView items={viewable}/>
        </div>
    );
}