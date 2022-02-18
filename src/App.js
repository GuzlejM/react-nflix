import { Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (

    <Router>
       <Routes>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
