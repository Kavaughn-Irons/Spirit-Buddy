import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <div style={{backgroundImage : 'linear-gradient(180deg,#B65DE7,#0B1EAC)', backgroundSize : '200%'}}>
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
