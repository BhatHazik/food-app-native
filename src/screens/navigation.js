import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Dining from './Dining';
import CartScreen from './CartScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

const {width, height} = Dimensions.get('screen');

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#F3EDF7',
          height: height * 0.08,
        },

        tabBarIcon: ({focused}) => {
          let iconName;
          let label;
          let cart;

          if (route.name === 'Dining') {
            iconName = 'brunch-dining';
            label = 'Dinning';
          } else if (route.name === 'CartScreen') {
            iconName = 'shoppingcart';
            label = 'Cart';
            cart = (
              <View style={styles.numberbox}>
                <Text style={styles.cartnumber}>
                  {cartItems.length > 0 ? cartItems.length : 0}
                </Text>
              </View>
            );
          } else if (route.name === 'SettingsScreen') {
            iconName = 'reload1';
            label = 'reorder';
          }

          // Set the color based on the focused state
          const color = focused ? '#FA4A0C' : 'black';
          const bgcolor = focused ? '#E8DEF8' : null;

          return (
            <View style={styles.tabbox}>
              <View style={[styles.homebox, {backgroundColor: bgcolor}]}>
                {cart}
                {route.name === 'Dining' ? (
                  <Icon name={iconName} size={20} color={color} />
                ) : (
                  <AntDesign name={iconName} size={20} color={color} />
                )}
              </View>
              <Text style={{color, fontSize: 12}}>{label}</Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name="Dining" component={Dining} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabbox: {
    alignItems: 'center',
  },
  homebox: {
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
  cartnumber: {
    color: 'white',
  },
  numberbox: {
    position: 'absolute',
    left: 40,
    top: 0,
    backgroundColor: '#FA4A0C',
    width: 20,
    height: 20,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
