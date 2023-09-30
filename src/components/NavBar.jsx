import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import './NavBar.css';

export default function NavBar() {
    return(
        <ul className="navbar-container">
            <nav className="links">
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