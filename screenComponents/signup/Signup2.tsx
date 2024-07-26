import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type SignupP2NavigationProp = StackNavigationProp<RootStackParamList, 'SignupP2'>;

type Props = {
  navigation: SignupP2NavigationProp;
};

export default function SignupP2({ navigation }: Props) {
  const [gender, setGender] = useState<string>('');
  const [birthday, setBirthday] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <Text style={tw`text-2xl mb-4 text-white`}>Additional Information</Text>
      <Text style={tw`text-sm mb-2 text-white w-60 text-center`}>Provide additional details to complete your profile.</Text>

      <TextInput
        style={tw`w-full border-b-2 border-gray-300 mb-4 p-2 text-white`}
        placeholder="Gender"
        placeholderTextColor="white"
        value={gender}
        onChangeText={setGender}
      />

      <TextInput
        style={tw`w-full border-b-2 border-gray-300 mb-4 p-2 mt-16 text-white`}
        placeholder="Birthday"
        placeholderTextColor="white"
        value={birthday}
        onChangeText={setBirthday}
      />

      <TextInput
        style={tw`w-full border-b-2 border-gray-300 mb-4 p-2 mt-16 text-white`}
        placeholder="Country"
        placeholderTextColor="white"
        value={country}
        onChangeText={setCountry}
      />

      <TouchableOpacity
        style={tw`bg-yellow-500 py-4 px-20 rounded-full mt-10`}
        onPress={() => {
          if (gender && birthday && country) {
            navigation.navigate('SignupP3', { gender, birthday, country });
          } else {
            alert('Please fill out all fields.');
          }
        }}
      >
        <Text style={tw`text-white font-semibold`}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}
