import React, {useState} from "react";
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

  const [currSem, setCurrSem] = useState(5);

  return (
    <Router>
      <div className="max-w-6xl mx-auto relative">
        <Nav currSem = {currSem} setCurrSem={setCurrSem} />
        <Switch>
          <Route exact path="/">
            <Hero />
            <div className="App__Container">
                <Row sem={currSem} />
              <TimeTable sem={currSem} />
            </div>
            <Resources sem={currSem} />
            <Deadlines sem={currSem}/>
            <CGPA sem={currSem}/>
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
