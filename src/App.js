import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import BrowsePage from "./pages/BrowsePage";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/signin"
            element={<SigninPage currentUser={this.state.currentUser} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/browse" element={<BrowsePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
