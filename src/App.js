import React from "react";
import Resources from "./Resources";
import Hero from "./Hero";
import Nav from "./Nav";
import Footer from "./Footer";

import Row from "./components/Row/Row";
import TimeTable from "./components/TimeTable/TimeTable";
import './App.css';
import CGPA from "./cgpa";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
      <div className="max-w-7xl mx-auto relative">
        <Nav />
        <Hero />
        <div className="App__Container">
            <Row></Row>
            <TimeTable></TimeTable>
        </div>
        <Resources />
        <CGPA />
        <Footer />
      </div>
  );
}

export default App;
