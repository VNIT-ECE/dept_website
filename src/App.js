import React from "react";
import Resources from "./Resources";
import Hero from "./Hero";
import Nav from "./Nav";
import Footer from "./Footer";
import Row from "./components/Row/Row";
import TimeTable from "./components/TimeTable/TimeTable";
import './App.css';
import CGPA from "./cgpa";
import Blog from "./Blog";
import Contact from "./Contact";
import Gallery from "./Gallery/Gallery";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="max-w-7xl mx-auto relative">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Hero />
            <div className="App__Container">
                <Row />
                <TimeTable />
            </div>
            <Resources />
            <CGPA />
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
