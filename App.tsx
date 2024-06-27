import React from 'react';
import LoadingPage from './src/screens/loadingPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import CodeScreen from './src/screens/CodeScreen';
import Dashboard from './src/screens/navigation';
import Toprated from './src/screens/Toprated';
import Popular from './src/screens/Popular';
import Biryani from './src/screens/Biryani';
import Nearest from './src/screens/Nearest';
import Search from './src/screens/search';
import Address from './src/screens/Address';
import MapScreen from './src/screens/MapScreen';
import Restaurant from './src/screens/Restaurant';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoadingPage"
          component={LoadingPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CodeScreen"
          component={CodeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Toprated"
          component={Toprated}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Popular"
          component={Popular}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Biryani"
          component={Biryani}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Nearest"
          component={Nearest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
