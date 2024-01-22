import {Link} from "react-router-dom";
function Nav(){
    return (
        <div className="navbar">
                <h1 className="navLogo">J'Bot.com</h1>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    )
};
export default Nav;