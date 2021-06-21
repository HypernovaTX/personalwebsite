import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './resources/index.scss';
import { HashRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';

// Components (pages)
import Home from './components/home';
import About from './components/about';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Switch>
          <Route exact path="/"><Home/></Route> {/* HOME */}
          <Route exact path="/about"><About/></Route> {/* HOME */}
        </Switch>
      </Router>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
