export default function Cart({cartItems, removeFromCart}) {
    //Calculate the total price of the cart items
    const total = cartItems.reduce((total, item) => total + item.price*item.quantity,0)


    return (
        <div className="Cart">
            {/* Contains all items in the cart, with their quantity and respective total price, as well as a total cart price at the bottom */}
            <div className="cart-item-container">
                {cartItems.map(item =>
                <div className="cart-item" key={`cart-item-${item.id}`}>
                    <div className="cart-label" key={`cart-label-${item.id}`}>{item.name}: {item.quantity} items for $<span data-testid="item-total">{(item.quantity*item.price).toFixed(2)}</span></div>
                    <button className="remove-cart-item" key={`remove-cart-item-${item.id}`} onClick={()=>removeFromCart(item)}>-</button>
                </div> 
                )}
            </div>
            <div className="total-price">Total: $<span data-testid="total">{total.toFixed(2)}</span></div>
        </div>
        )
}