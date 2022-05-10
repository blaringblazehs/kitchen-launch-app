import "../css/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>Kitchen</h2>
                </div>
                {/* menu part */}
                <div className={menu ? "mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <Link to="/persona">Person A</Link>
                        </li>
                        <li>
                            <Link to="/personb">Person B</Link>
                        </li>
                        <li>
                            <Link to="/personc">Person C</Link>
                        </li>
                    </ul>
                </div>
                {/* hamburgar menu */}
                {/* <div className="hamburger-menu">
                    <a href="#" onClick={() => setMenu(!menu)}>
                        <GiHamburgerMenu />
                    </a>
                </div> */}
            </nav>
            {/* main heading section */}
        </>
    );
};
export default Navbar;
