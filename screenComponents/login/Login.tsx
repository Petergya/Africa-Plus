// screenComponents/Login.tsx
import React from 'react';
import { View, Text } from 'react-native';
import tw from "tailwind-react-native-classnames";

export default function Login() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-2xl`}>Login Page</Text>
    </View>
  );
}
