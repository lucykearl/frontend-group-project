import "../styles/app.css";
import NavBar from "./NavBar";
import "../styles/navbar.css";
import { Routes, Route } from "react-router-dom";
import AddSessionPage from "./AddSession";
import HistoryPage from "./History";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/addsession" element={AddSessionPage} />
        <Route path="/history" element={HistoryPage} />
      </Routes>
      <h2>REP</h2>
    </div>
  );
}

export default App;
