import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/pages/login";
import Home from "./components/pages/home";
import Profile from "./components/pages/profile";
import Settings from "./components/pages/settings";
import Messenger from "./components/pages/messenger";


import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/messenger" component={Messenger} />
      </div>
    </Router>
  );
}

export default App;
