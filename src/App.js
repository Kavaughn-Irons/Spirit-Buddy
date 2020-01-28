import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/pages/login";
import Home from "./components/pages/home";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
