
import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './scenes/Home';
import TransList from './scenes/TransportList';

export default () => {
  return (
      <Router>
          <Scene key="root">
              <Scene
                  key="Home"
                  component={Home}
                  title="Home"
                  initial={true}
                  hideNavBar={true}
              />
              <Scene
                  key="TransList"
                  component={TransList}
                  hideNavBar={true}
              />
          </Scene>
      </Router>
  );
};