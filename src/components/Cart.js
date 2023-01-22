export default function Cart({cartItems, removeFromCart}) {
    const total = cartItems.reduce((total, item) => total + item.price*item.quantity,0)
    return (
        <div className="Cart">
            <div className="cart-item-container">
                {cartItems.map(item =>
                <div className="cart-item" key={`cart-item-${item.id}`}>
                    <div className="cart-label" key={`cart-label-${item.id}`}>{item.name}: {item.quantity} items for ${(item.quantity*item.price).toFixed(2)}</div>
                    <button className="remove-cart-item" key={`remove-cart-item-${item.id}`} onClick={()=>removeFromCart(item)}>-</button>
                </div> 
                )}
            </div>
            <div className="total-price">Total: ${total.toFixed(2)}</div>
        </div>
        )
}