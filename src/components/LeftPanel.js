import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/leftpanel.css";
const LeftPanel = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div>
            <nav className="main-nav-left">
                <div className="left-head">
                    <h2>Managers</h2>
                </div>
                {/* menu part */}
                <div className="left-menu">
                    <Link to="/personb/ajay">
                        <div>Ajay</div>
                    </Link>

                    <Link to="/personb/vijay">
                        <div>Vijay</div>
                    </Link>

                    <Link to="/personb/rahul">
                        <div>Rahul</div>
                    </Link>
                </div>
            </nav>
        </div>
    );
};
export default LeftPanel;
