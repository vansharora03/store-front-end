export default function Cart({cartItems}) {
    return (cartItems.map(item => <div>{item.name}</div>))
}