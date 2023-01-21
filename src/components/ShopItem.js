export default function ShopItem({item, addToCart}) {
    return (
    <div key={`item-${item.id}`} className="shop-item">
        <img key={`img-${item.id}`} src={item.imgSrc} alt={item.name} className="shop-item-image"/>
        <h3 key={`name-${item.id}`} className="shop-item-name">{item.name}</h3>
        <p key={`price-${item.id}`} className="shop-item-price">{item.price}</p>
        <button key={`add-to-cart-${item.id}`} className="add-to-cart" onClick={()=>addToCart(item)}>Add To Cart</button>
    </div>
    )
}