import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Cube from '../Cube/Cube';
import Desktop from '../Desktop/Desktop';
import BootScreen from './Bootup/BootScreen';

export default function App() {
  return (
    <div>
      <Router forceRefresh={true}>
        <Switch>
          <Route 
            path="/" 
            exact
            component={BootScreen} />
          <Route 
            path="/home" 
            exact
            component={Desktop} />
        </Switch>
      </Router>
    </div>
  );
}
