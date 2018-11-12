import React, {Component} from 'react';
import Home from './Home/index';
import About from './About';
import Reddit from './Reddit/index';
import Youtube from './Youtube/index';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => <About title="About"/>} />
          <Route path="/reddit" component={Reddit} />
          <Route path="/youtube" component={Youtube} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}
