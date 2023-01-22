import { useState } from "react";
//Take an item and display some information for it
export default function ShopItem({item, addToCart}) {
    //Store the amount to be added to cart
    const [amount, setAmount] = useState(1);

    //Handle amount input change
    const handleChange = (e) => {
        //prevent negatives
        if(e.target.value <= 0) {
            e.target.value = 0;
        }
        setAmount(e.target.value);
    }

    return (
    <div key={`item-${item.id}`} className="shop-item">
        <img key={`img-${item.id}`} src={item.imgSrc} alt={item.name} className="shop-item-image"/>
        <h3 key={`name-${item.id}`} className="shop-item-name">{item.name}</h3>
        <p key={`price-${item.id}`} className="shop-item-price">{item.price}</p>
        <input data-testid="amount" key={`amount-${item.id}`} type="number" onChange={handleChange} className="shop-item-amount" value={amount}/>
        <button key={`add-to-cart-${item.id}`} className="add-to-cart" onClick={()=>addToCart(item, amount)}>Add To Cart</button>
    </div>
    )
}