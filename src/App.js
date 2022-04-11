import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import Footer from "./components/Footer"

import LoginProvider from "./contexts/LoginContext"

const App = () => {
  return (
    <LoginProvider>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Switch>

        <Footer />
      </Router>
    </LoginProvider>
  );
}

export default App;