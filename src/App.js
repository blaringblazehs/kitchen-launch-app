import Navbar from "./components/Navbar";
import PersonA from "./components/PersonA";
import PersonB from "./components/PersonB";
import PersonC from "./components/PersonC";
import Ajay from "./components/Ajay";
import Vijay from "./components/Vijay";
import Rahul from "./components/Rahul";
import { Routes, Route } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/persona" element={<PersonA />} />
                <Route path="/personb" element={<PersonB />}>
                    <Route path="ajay" element={<Ajay />} />
                    <Route path="vijay" element={<Vijay />} />
                    <Route path="rahul" element={<Rahul />} />
                </Route>
                <Route path="/personc" element={<PersonC />} />
            </Routes>
        </div>
    );
}

export default App;
