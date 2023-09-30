import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import './NavBar.css';
import { useContext } from "react";
import { MangodbContext } from "../mangodbContext";

export default function NavBar() {

    const { user } = useContext(MangodbContext);
    
    return(
        <ul className="navbar-container">
            <nav className="links">
                <Link to="/users/login">
                    <h2>login</h2>
                </Link> 
                {user && (
                    <li>Logged in as: {user.email}</li>
                )}
                <Link to='/'>
                    <h2>home</h2>
                </Link>
                <Link to='/bookmarks'>
                    <h2>bookmarks</h2>
                </Link>
            </nav>
            <SearchBar />
        </ul>
    );
};

/**
 *             {user ? (
                <Link onClick={logout} to="/users/login">Logout</Link>
            ): (
                <Link to="/users/login">Login</Link> 
            )}
 */