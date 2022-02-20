import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";
import BrowsePage from "./pages/BrowsePage";


function App() {
  return (

    <Router>
       <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signin" element={<SigninPage />}/>
        <Route path="/browse" element={<BrowsePage />}/>

      </Routes>
    </Router>
  );
}

export default App;
