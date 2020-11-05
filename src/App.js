import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
// import Landing from "./pages/Landing";
import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Skills from "./pages/Skills";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <main>
            {/* <Route path="/" exact={true} component={Landing} /> */}
            <Route path="/about" exact={true} component={About} />
            {/* <Route path="/projects" exact={true} component={Projects} /> */}
            {/* <Route path="/skills" exact={true} component={Skills} /> */}
            {/* <Route path="/contact" exact={true} component={Contact} /> */}
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
