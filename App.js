import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginProvider from './Context/LoginProvider';
import StackScreen from './Navigator/ScreenNavigator/StackScreen';
import ScrollContext from './Context/ScrollContext';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <LoginProvider>
      <ScrollContext>
        <NavigationContainer>
          <StackScreen />
        </NavigationContainer>
      </ScrollContext>
    </LoginProvider>
  );
};

export default App;
