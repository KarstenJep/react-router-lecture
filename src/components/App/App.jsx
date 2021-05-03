import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetail from '../AnimalDetail/AnimalDetail';

function App() {
  return (
    <div className="App">
      <h1>SPAs!</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/plants">Plants</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact> 
        {/* exact is added to keep multiple paths from displaying, could also use path='/home' */}
          <Home />
        </Route>
        <Route>
          <Route path="/animals" exact>
            <Animals />
          </Route>
        </Route>
        <Route path="/animals/:id">
          <AnimalDetail />
        </Route>
        <Route path="/plants">
           <Plants />
        </Route>        
      </Router>
    </div>
  );
}

export default App;
