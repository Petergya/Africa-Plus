
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type SignupP1NavigationProp = StackNavigationProp<RootStackParamList, 'SignupP1'>;

type Props = {
  navigation: SignupP1NavigationProp;
};

export default function SignupP1({ navigation }: Props) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <Text style={tw`text-2xl mb-4 text-white`}>Create Your Account</Text>
      <Text style={tw`text-sm mb-2 text-white w-60 text-center`}>Fill out your details to create your account.</Text>

      <TextInput
        style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2 text-white`}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2 mt-10 text-white`}
        placeholder="Password"
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={tw`bg-yellow-500 py-4 px-20 rounded-full mt-16`}
        onPress={() => {
          if (email && password) {
            navigation.navigate('SignupP2', { email, password });
          } else {
            alert('Please fill out both fields.');
          }
        }}
      >
        <Text style={tw`text-white font-semibold`}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}
