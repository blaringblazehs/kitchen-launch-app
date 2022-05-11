import "../css/personC.css";
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
const PersonC = () => {
    const [kitchen, setKitchen] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const ref = collection(db, "percenCItems");

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
        <div className="main-pc">
            <div className="list-pc">
                {isPending && (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                )}
                {kitchen.map((val) => (
                    <div className="list-c" key={val.id}>
                        {console.log("value id: ", val.id)}

                        <div>
                            <p>Kitchen Name - {val.kitchenName}</p>
                        </div>
                        <div>
                            <p>Manager Name - {val.managerName}</p>
                        </div>
                        <h2>Details :-</h2>
                        <div>
                            <p>Packaging Transfered - {val.pkgTransfer}</p>
                        </div>
                        <div>
                            <p>Packaging Transfered Remarks - {val.remarks}</p>
                        </div>
                        <div>
                            <p>Pre Evaluation Done - {val.preeval}</p>
                        </div>
                        <div>
                            <p>Video Evaluation Done - {val.videoeval}</p>
                        </div>
                        <div>
                            <p>Physical Culnary Training - {val.pct}</p>
                        </div>
                        <div>
                            <p>
                                Actual Training Date - {val.actualTrainingDate}
                            </p>
                        </div>
                        <div>
                            <p>App and Menu Training - {val.appTraining}</p>
                        </div>
                        <div>
                            <p>Training Form Filled - {val.trainingForm}</p>
                        </div>
                        <div>
                            <p>Live Delay - {val.createdAt.toString()}</p>
                        </div>
                        <div className="btn-pc">
                            <button className="btn-green">Approve</button>
                            <button className="btn-red">Reject</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PersonC;
