import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/app.css";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import AddSession from "./AddSession";
import History from "./History";
import Charts from "./Charts";
import { BrowserRouter as Router } from "react-router-dom";
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
    return (
      <div className="wrapper">
        <button className="button button--login" onClick={loginWithRedirect}>
          Log in
        </button>
      </div>
    );
  }

  return (
    <div className="mainmenu">
      <h4 className="heading">REP</h4>
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
          <Route path="/" element={<Charts />} />
          <Route path="/add-session" element={<AddSession />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
