import { addDoc, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import db from "./firebase";
import { onSnapshot } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
const Kitchen = () => {
    //Main Hook
    const [singleKitchen, setSingleKitchen] = useState({});
    //Form Hooks
    const [pkgTransfer, setPkgTransfer] = useState("Yes");
    const [remarks, setRemarks] = useState("");
    const [preeval, setPreEval] = useState("No");
    const [videoeval, setVideoEval] = useState("No");
    const [pct, setPct] = useState("No");
    const [actualTrainingDate, setATD] = useState(Date());
    const [appTraining, setAppTraining] = useState("No");
    const [trainingForm, setTrainingForm] = useState("No");
    const [liveDate, setLiveDate] = useState(new Date());

    const { id } = useParams();

    //retrieve data of single id clicked
    useEffect(() => {
        const docRef = doc(db, "items", id);
        console.log("doc ref", docRef.data);
        onSnapshot(docRef, (doc) => {
            setSingleKitchen(doc.data());
            console.log("single data: ", doc.data());
        });
        console.log(singleKitchen);
    }, [id]);

    //Handle Functions
    const handlepkgTransfer = (e) => {
        setPkgTransfer(e.target.value);
    };
    const handleRemarks = (e) => {
        setRemarks(e.target.value);
    };
    const handlePreEval = (e) => {
        setPreEval(e.target.value);
    };
    const handleVideoEval = (e) => {
        setVideoEval(e.target.value);
    };
    const handlePct = (e) => {
        setPct(e.target.value);
    };
    const handleActualTrainingDate = (e) => {
        setATD(e.target.value);
    };
    const handleAppTraining = (e) => {
        setAppTraining(e.target.value);
    };
    const handleTrainingFormFilled = (e) => {
        setTrainingForm(e.target.value);
    };
    const handleLiveDate = (e) => {
        setLiveDate(e.target.value);
    };

    const handleSubmit = (event) => {
        alert(
            "Kitchen Name: " +
                singleKitchen.kitchenName +
                "  " +
                "Manager name is: " +
                singleKitchen.managerName
        );

        const postRef = collection(db, "percenCItems");
        const data = {
            kitchenName: singleKitchen.kitchenName,
            managerName: singleKitchen.managerName,
            pkgTransfer: pkgTransfer,
            remarks: remarks,
            preeval: preeval,
            videoeval: videoeval,
            pct: pct,
            actualTrainingDate: actualTrainingDate,
            appTraining: appTraining,
            trainingForm: trainingForm,
            liveDate: liveDate,

            createdAt: new Date(),
        };
        addDoc(postRef, data)
            .then((res) => {
                console.log(res);
                alert("Blog Saved");
            })
            .catch((err) => {
                console.log(err);
            });

        event.preventDefault();
    };
    return (
        <div>
            <h1>Kitchen ; {id}</h1>
            {/* <p>Kitchen Name: {singleKitchen.kitchenName} </p>
            <p>Manager Name: {singleKitchen.managerName} </p> */}
            <div className="list-pa">
                <h1> Kitchen Name - {singleKitchen.kitchenName}</h1>
                <form onSubmit={handleSubmit} className="form-pa">
                    <div>
                        <label className="label-pa">Packaging Transfered</label>
                        <select
                            value={pkgTransfer}
                            onChange={handlepkgTransfer}
                            className="select-pa"
                        >
                            <option value="Yes">Yes</option>
                            <option value="All">All</option>
                            <option value="Partial">Partial</option>
                        </select>
                    </div>
                    <div>
                        <label className="label-pa">
                            Packaging Transfered Remarks
                        </label>
                        <input
                            type="text"
                            onChange={handleRemarks}
                            className="name-pa"
                            placeholder="Enter Your Remarks..."
                        />
                    </div>
                    <div>
                        <label className="label-pa">Pre Evaluation Done</label>
                        <select
                            value={preeval}
                            onChange={handlePreEval}
                            className="select-pa"
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <label className="label-pa">
                            Video Evaluation Done
                        </label>
                        <select
                            value={videoeval}
                            onChange={handleVideoEval}
                            className="select-pa"
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Not Applicable">
                                Not Applicable
                            </option>
                        </select>
                    </div>
                    <div>
                        <label className="label-pa">
                            Physical Culinary Training
                        </label>
                        <select
                            value={pct}
                            onChange={handlePct}
                            className="select-pa"
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <label className="label-pa">Actual Training Date</label>
                        <input
                            type="date"
                            onChange={handleActualTrainingDate}
                            className="name-pa"
                            placeholder="Enter Your Remarks..."
                        />
                    </div>
                    <div>
                        <label className="label-pa">
                            App and Menu Training
                        </label>
                        <select
                            value={appTraining}
                            onChange={handleAppTraining}
                            className="select-pa"
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <label className="label-pa">Training Form Filled</label>
                        <select
                            value={trainingForm}
                            onChange={handleTrainingFormFilled}
                            className="select-pa"
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <label className="label-pa">Live Date</label>
                        {/* <input
                            type="date"
                            onChange={handleLiveDate}
                            value={Date()}
                            className="name-pa"
                            placeholder="Enter Your Remarks..."
                        /> */}
                        <p onChange={handleLiveDate}>{Date()}</p>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Submit"
                            className="btn-pa"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Kitchen;
