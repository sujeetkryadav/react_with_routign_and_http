import React, { Component } from 'react';
import Home from './components/home.component';
import Price from './components/price.component';
import {  Switch, Route, Link } from 'react-router-dom';
import Feature from './components/feature.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to='/'  className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/feature'  className="nav-link">Features</Link>
              </li>
              <li className="nav-item">
                <Link to='/price'  className="nav-link">Pricing</Link>
              </li>
             
            </ul>
          </div>
        </nav>
        </header>
        {/* Route content  */}
        <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Price' component={Price} />
                  <Route exact path='/feature' component={Feature} />
           </Switch>
           </div>
           </div>
      </div>
      </div>

    );
  }
}

export default App;
