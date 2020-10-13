import React from 'react';
import './App.css';
import Header from "./Header"
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./Home";


function App() {
  return (
    <Router>
    <div className="App">
      {/*<h1>I'm going to create amazon-app with react-js</h1>*/}
      <Switch>
       
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
       
        <Route path="/login">
          <h1>Login page</h1>
        </Route>
        
        {/* this is the default route */}
        <Route path="/">
          <Header />
          <Home />
          
      
        </Route>
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
