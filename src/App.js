import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";

function App() {
  return (

    <Router>
       <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signin" element={<SigninPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
