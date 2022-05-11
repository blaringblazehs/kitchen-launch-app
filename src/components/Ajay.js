import "../css/list.css";
import {
    addDoc,
    collection,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore";
import db from "./firebase";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
const Ajay = () => {
    const [kitchen, setKitchen] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const ref = collection(db, "items");

    useEffect(() => {
        getDocs(ref)
            .then((res) => {
                const kitchen = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setKitchen(kitchen);
                setIsPending(false);
            })
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <div className="main-a">
            <div className="left-list">
                <h1>Ajay</h1>
                {isPending && (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                )}
                {kitchen
                    .filter((val) => {
                        return val.managerName === "Ajay";
                    })
                    .map((val) => (
                        <Link to={`kitchen/${val.id}`}>
                            <div className="list-a" key={val.id}>
                                {console.log("value id: ", val.id)}

                                <p>{val.kitchenName}</p>
                                <div>
                                    <i className="fa-solid fa-angle-right fa-2x"></i>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
            <Outlet />
        </div>
    );
};
export default Ajay;
