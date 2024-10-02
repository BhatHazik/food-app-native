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
import CartScreen from './src/screens/CartScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import Newupi from './src/screens/NewUpi';
import NewCard from './src/screens/NewCard';
import BankScreen from './src/screens/BankScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MyAccountScreen from './src/screens/MyAccountScreen';
import EditScreen from './src/screens/EditScreen';
import EditAddressScreen from './src/screens/EditAddressScreen';
import RefundScreen from './src/screens/RefundScreen';
import SecondPayment from './src/screens/SecondPayment';
import CardDetails from './src/screens/CardDetails';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import SuccessScreen from './src/screens/SuccessScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={store}>
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
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Newupi"
            component={Newupi}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewCard"
            component={NewCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BankScreen"
            component={BankScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditScreen"
            component={EditScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyAccountScreen"
            component={MyAccountScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditAddressScreen"
            component={EditAddressScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RefundScreen"
            component={RefundScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SecondPayment"
            component={SecondPayment}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CardDetails"
            component={CardDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SuccessScreen"
            component={SuccessScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
