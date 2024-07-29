
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

const resetImage = require('../../assets/images/reset.png');

type Login3NavigationProp = StackNavigationProp<RootStackParamList, 'Login3'>;

type Props = {
  navigation: Login3NavigationProp;
};

export default function Login3({ navigation }: Props) {
  const [enterNewPassword, setEnterNewPassword] = useState<string>('');
  const [reenterNewPassword, setReenterNewPassword] = useState<string>('');

  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
        <Image
         source={resetImage}
         style={tw`h-40 w-40 `}
         resizeMode="contain"
       />
      <Text style={tw`text-2xl mb-4 text-white`}>Reset Password</Text>
      

      <TextInput
        style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2 text-white`}
        placeholder="Enter New Password"
        placeholderTextColor="white"
        value={enterNewPassword}
        onChangeText={setEnterNewPassword}
        secureTextEntry
      />

      <TextInput
        style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2 mt-10 text-white`}
        placeholder="Re-enter New Password"
        placeholderTextColor="white"
        value={reenterNewPassword}
        onChangeText={setReenterNewPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={tw`  rounded-full mt-16`}
        onPress={() => {
          if (enterNewPassword && reenterNewPassword) {
            navigation.navigate('Login4', { enterNewPassword, reenterNewPassword });
          } else {
            alert('Please fill out both fields.');
          }
        }}
      >
        <Text  style={tw`border-2 py-4 rounded-full border-yellow-500 text-yellow-500 text-center font-semibold px-24`}
        >Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}
