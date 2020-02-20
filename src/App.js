import React from 'react';
import './App.css';

import { Route, Switch  } from "react-router-dom";

import HomePage from './pages/homepage/homepage';

const hats = () => (
  <div>
  <h1>
  hello hats
  </h1>
  </div>
)



function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/"  component= {HomePage}/>
      <Route path="/hats"  component= {hats}/>
      </Switch>

    </div>
  );
}

export default App;
