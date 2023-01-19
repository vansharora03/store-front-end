export default function ShopItem({item}) {
    return (
    <div className="shop-item">
        <img key={`img-${item.id}`} src={item.imgSrc} alt={item.name} className="shop-item-image"/>
        <h3 key={`name-${item.id}`} className="shop-item-name">{item.name}</h3>
        <p key={`price-${item.id}`} className="shop-item-price">{item.price}</p>
    </div>
    )
}