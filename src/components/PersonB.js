import "../css/personB.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LeftPanel from "./LeftPanel";
import Ajay from "./Ajay";
import Vijay from "./Vijay";
import Rahul from "./Rahul";
import { Outlet } from "react-router-dom";
const PersonB = () => {
    return (
        <div className="main-pb">
            <div className="left">
                {/* <h1>left</h1> */}
                <LeftPanel />
            </div>
            <div className="right">
                {/* <h1>right</h1> */}

                <Outlet />
            </div>
        </div>
    );
};
export default PersonB;
