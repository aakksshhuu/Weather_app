import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home'
import weather from './weather'
import todo from './todoComponents/todo'
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar'
function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path="/todo" component={todo} />
      <Route path="/weather" component={weather} />
      <Route path="/" component={Home} />
    </Switch>
    </>
  );
}

export default App;
 