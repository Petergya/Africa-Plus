
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screenComponents/HomeScreen';
 import SignupP1 from '../../screenComponents/signup/SignUpp1';
 import SignupP2 from '../../screenComponents/signup/Signup2';
 import SignupP3 from '../../screenComponents/signup/Signup2';
 import SignupP4 from '../../screenComponents/signup/Signup2';
  import Login from '../../screenComponents/login/Login'; 
const Stack = createStackNavigator();

export default function App() {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignupP1" component={SignupP1} />
        <Stack.Screen name="SignupP2" component={SignupP2} />
        <Stack.Screen name="SignupP3" component={SignupP3} />
        <Stack.Screen name="SignupP4" component={SignupP4} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  
  );
}

