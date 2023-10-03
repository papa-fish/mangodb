import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import './NavBar.css';
import { useContext } from "react";
import { MangodbContext } from "../mangodbContext";

export default function NavBar() {

    const { user, logout } = useContext(MangodbContext);

    return(
        <nav className="navbar-container">
            <ul className="links">
                {!user ? (
                    <Link to="/users/login">
                        login
                    </Link> 
                ) : (
                    <li>logged in as {user.user_id}<a href="/" onClick={logout}>( logout )</a></li>
                )}
                <Link to='/'>
                    home
                </Link>
                <Link to='/bookmarks'>
                    bookmarks
                </Link>
            </ul>
            <SearchBar />
        </nav>
    );
};