import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/app.css";
import NavBar from "./NavBar";
import "../styles/navbar.css";
import { Routes, Route } from "react-router-dom";
import AddSession from "./AddSession";
import History from "./History";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/app.css";
import "../index.css";

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (!isAuthenticated) {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }

  return (
    <div className="mainmenu">
      <h2 className="heading">REP</h2>
      <Router>
        <NavBar />
        <div className="logout">
          Hello {user.name}{" "}
          <button
            className="button"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log out
          </button>
        </div>
        <Routes>
          <Route path="/" element={() => <h2>test</h2>} />
          <Route path="/add-session" element={<AddSession />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
