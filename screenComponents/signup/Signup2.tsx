

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type SignupP3NavigationProp = StackNavigationProp<RootStackParamList, 'SignupP2'>;

type Props = {
  navigation: SignupP3NavigationProp;
};

export default function SignupP3({ navigation }: Props) {
  const [gender, setGenderl] = useState<string>('');
  const [birthday, setBirthday] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <Text style={tw`text-2xl mb-4 text-white`}>Create Your Account</Text>
      <Text style={tw`text-sm mb-2 text-white w-60 text-center`}>
        Fill out your details to complete the signup process.
      </Text>

      <TextInput
        style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2 text-white`}
        placeholder="gender"
        placeholderTextColor="white"
        value={gender}
        onChangeText={setGenderl}
      />

      <TextInput
        style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2 mt-10 text-white`}
        placeholder="birthday"
        placeholderTextColor="white"
        value={birthday}
        onChangeText={setBirthday}
        secureTextEntry
      />
      <TextInput
        style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2 mt-10 text-white`}
        placeholder="country"
        placeholderTextColor="white"
        value={country}
        onChangeText={setCountry}
        secureTextEntry
      />


      <TouchableOpacity
        style={tw`bg-yellow-500 py-4 px-20 rounded-full mt-16`}
        onPress={() => {
          if (gender && birthday && country) {
          
            navigation.navigate('SignupP3', { gender, birthday, country });
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