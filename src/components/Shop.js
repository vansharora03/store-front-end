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

    const showItems = (e) => {
        const showing = items.filter(item => {
            return item.type === e.target.dataset.item;
        });
        setViewable(showing);
    }

    return (
        <div className="Shop">
            <h1 className="page-title">Shop</h1>
            <button data-item="laptop" className='show-item' onClick={showItems}>Show Laptops</button>
            <button data-item="phone" className='show-item' onClick={showItems}>Show Phone</button>
            <button data-item="console" className='show-item' onClick={showItems}>Show Consoles</button>
            <ShopView items={viewable}/>
        </div>
    );
}