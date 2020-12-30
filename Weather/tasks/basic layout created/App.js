import React from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/Service" component={Service} />
      <Route path="/Contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
    </>
  );
}

export default App;
 