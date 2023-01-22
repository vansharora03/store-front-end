import ShopItem from "./ShopItem";


//Takes the items and creates a ShopItem for each
export default function ShopView({items, addToCart}) {     
    return (
        <div className="ShopView">
            {items.map(item => {
                return <ShopItem key={`ShopItem-${item.id}`} item={item} addToCart={addToCart}/>
            })}
        </div>
    );
}