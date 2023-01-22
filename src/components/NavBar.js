import { Link } from "react-router-dom";

//This component displays the navigation bar
export default function NavBar({cartSize}) {
    
    return (
        <div className="NavBar">
            <Link to="/">
                {/* Home link */}
                <h2 className="nav-item">Home</h2>
            </Link>
            <Link to="/shop">
                {/* Shop link */}
                <h2 className="nav-item">Shop</h2>
            </Link>
            <Link to="/cart">
                {/* Cart link */}
                <h2 className="nav-item">Cart: {cartSize}</h2>
            </Link>
        </div>
    );
}