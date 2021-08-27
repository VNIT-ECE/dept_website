import React from "react";
import Resources from "./Resources/Resources";
import Hero from "./Top/Hero";
import Nav from "./Top/Nav";
import Footer from "./Bottom/Footer";
import Row from "./components/Row/Row";
import TimeTable from "./components/TimeTable/TimeTable";
import './App.css';
import CGPA from "./CGPA/cgpa";
import Blog from "./Bottom/Blog";
import Contact from "./Bottom/Contact";
import Gallery from "./Gallery/Gallery";
import Deadlines from "./components/Assignments/Assign"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="max-w-6xl mx-auto relative">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Hero />
            <div className="App__Container">
                <Row />
                <TimeTable />
            </div>
            <Resources />
            <Deadlines/>
            <CGPA/>
            <Blog /> 
            <Contact />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route> 
        </Switch>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
