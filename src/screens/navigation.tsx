import  React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import Dining from './Dining';
function HomeScreen() {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);};
  return (
      <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:true,
        tabBarStyle:{backgroundColor:'#D6D6D6'},
        tabBarActiveTintColor: 'tomato'
        
         
      }}
      
      >
        <Tab.Screen options={{
          tabBarIcon:()=>{
            return(
              <Image source={require('../assets/dining.png')} style={{height:25,width:25}}
         
              />
             
            )
          }
        }}
         name="dining" component={Dining} />
        <Tab.Screen
         options={{
          tabBarIcon:()=>{
            return(
              <Image source={require('../assets/Cart.png')} style={{height:25,width:25}}/>
              
            )
          }
        }}
         name="Cart" component={SettingsScreen} />
        <Tab.Screen   options={{
          tabBarIcon:()=>{
            return(
              <Image source={require('../assets/Reorder.png')} style={{height:25,width:25}}/>
              
            )
          }
        }}
        
        name="Reorder" component={SettingsScreen} />
      </Tab.Navigator>
  );
}