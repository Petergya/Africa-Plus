
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../../screenComponents/WelcomeScreen';
import HomeScreen from '../../screenComponents/homeScreen/Home';
import Login from '../../screenComponents/login/Login'; 
import Login2 from '../../screenComponents/password/Login2';
import Login3 from '../../screenComponents/password/Login3';
import Login4 from '../../screenComponents/password/Login4';
import SignupP1 from '../../screenComponents/signup/SignUpp1';
import SignupP2 from '../../screenComponents/signup/Signup2';
import SignupP3 from '../../screenComponents/signup/Signup3';
import SignupP4 from '../../screenComponents/signup/Signup4';
import { RootStackParamList } from '../../types'; 


const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (

    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignupP1" component={SignupP1} />
        <Stack.Screen name="SignupP2" component={SignupP2} />
        <Stack.Screen name="SignupP3" component={SignupP3} />
        <Stack.Screen name="SignupP4" component={SignupP4} /> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Add other screens as needed */}
      </Stack.Navigator>
    
    // <Stack.Navigator initialRouteName="Login">
    //   <Stack.Screen name="Welcome" component={WelcomeScreen} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Signup" component={SignupP1} />
    //     <Stack.Screen name="Home" component={HomeScreen} />
        
      
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Login2" component={Login2} />
    //     <Stack.Screen name="Login3" component={Login3} />
    //     <Stack.Screen name="Login4" component={Login4} />
    //     <Stack.Screen name="SignupP1" component={SignupP1} />
    //     <Stack.Screen name="SignupP2" component={SignupP2} />
    //     <Stack.Screen name="SignupP3" component={SignupP3} />
    //     <Stack.Screen name="SignupP4" component={SignupP4} /> 
    //   </Stack.Navigator>
    
  );
}

