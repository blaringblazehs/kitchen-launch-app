import { addDoc, collection } from "firebase/firestore";
import db from "./firebase";
import { useState } from "react";
import "../css/personA.css";

const PersonA = () => {
    const [kitchenName, setKitchenName] = useState("");
    const [manager, setManager] = useState("Ajay");

    //handle input text box
    const handleName = (e) => {
        setKitchenName(e.target.value);
    };

    // handle dropdown select
    const handleSelect = (event) => {
        setManager(event.target.value);
    };
    const handleSubmit = (event) => {
        alert(
            "Kitchen Name: " +
                kitchenName +
                "  " +
                "Manager name is: " +
                manager
        );

        const postRef = collection(db, "items");
        const data = {
            kitchenName: kitchenName,
            managerName: manager,
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
        <div className="main-pa">
            <div className="list-pa">
                <h1>Person A</h1>
                <form onSubmit={handleSubmit} className="form-pa">
                    <div>
                        <label className="label-pa">Kitchen outlet</label>

                        <input
                            type="text"
                            className="name-pa"
                            onChange={handleName}
                            placeholder="Enter Your Kitchen outlet name..."
                        />
                    </div>
                    <div>
                        <label className="label-pa">Manager Name</label>

                        <select
                            value={manager}
                            onChange={handleSelect}
                            className="select-pa"
                        >
                            <option value="Ajay">Ajay</option>
                            <option value="Vijay">Vijay</option>
                            <option value="Rahul">Rahul</option>
                        </select>
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
export default PersonA;
