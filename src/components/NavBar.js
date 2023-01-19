import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="NavBar">
            <Link to="/">
                <h2 className="nav-item">Home</h2>
            </Link>
            <Link to="/shop">
                <h2 className="nav-item">Shop</h2>
            </Link>
        </div>
    );
}