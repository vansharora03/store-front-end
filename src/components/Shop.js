import { useEffect, useState } from 'react';
import ShopView from './ShopView';
import data from '../assets/data/shoptItemData';

//Render the shop page, continue passing down addToCart function
export default function Shop({addToCart}) {
    //store all items in state
    const [items, setItems] = useState([]);
    //store viewable items in state
    const [viewable, setViewable] = useState([]);
    useEffect(() => {
        setItems(data);
        setViewable(data);
    }, [])

    //allow filtering of all items through viewable
    const showItems = (e) => {
        if(e.target.dataset.item === 'all') {
            setViewable(items);
            return;
        }
        const showing = items.filter(item => {
            return item.type === e.target.dataset.item;
        });
        setViewable(showing);
    }

    return (
        <div className="Shop">
            <h1 className="page-title">Shop</h1>
            <button data-item="all" className='show-item' onClick={showItems}>All Items</button>
            <button data-item="laptop" className='show-item' onClick={showItems}>Show Laptops</button>
            <button data-item="phone" className='show-item' onClick={showItems}>Show Phone</button>
            <button data-item="console" className='show-item' onClick={showItems}>Show Consoles</button>
            <ShopView items={viewable} addToCart={addToCart}/>
        </div>
    );
}