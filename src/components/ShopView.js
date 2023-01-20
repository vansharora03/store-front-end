import ShopItem from "./ShopItem";

export default function ShopView({items}) {     
    return (
        <div className="ShopView">
            {items.map(item => {
                return <ShopItem item={item}/>
            })}
        </div>
    );
}