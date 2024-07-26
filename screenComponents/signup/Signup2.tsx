import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';

type SignupP2NavigationProp = StackNavigationProp<RootStackParamList, 'SignupP2'>;

type Props = {
  navigation: SignupP2NavigationProp;
};

export default function SignupP2({ navigation }: Props) {
  const [gender, setGender] = useState<string>('');
  const [birthday, setBirthday] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const countryOptions = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    // Add more countries as needed
  ];

  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <Text style={tw`text-2xl mb-4 text-white`}>Additional Information</Text>
      <Text style={tw`text-sm mb-2 text-white w-60 text-center`}>Provide additional details to complete your profile.</Text>

      <View style={tw`w-full mx-6 border-b-2 border-gray-300 mb-4 p-2 flex-row items-center`}>
        <RNPickerSelect
          onValueChange={(value) => setGender(value as string)}
          items={genderOptions}
          placeholder={{ label: "Gender", value: null }}
          value={gender}
          style={{
            inputIOS: { color: 'white', flex: 1 },
            inputAndroid: { color: 'white', flex: 1 },
          }}
          Icon={() => {
            return <Icon name="arrow-drop-down" size={24} color="white" />;
          }}
        />
      </View>

      <TextInput
        style={tw`w-full border-b-2 border-gray-300 mb-4 p-2 mt-16 text-white`}
        placeholder="Birthday"
        placeholderTextColor="white"
        value={birthday}
        onChangeText={setBirthday}
      />

      <View style={tw`w-full mx-6 border-b-2 border-gray-300 mb-4 p-2 mt-16 flex-row items-center`}>
        <RNPickerSelect 
          onValueChange={(value) => setCountry(value as string)}
          items={countryOptions}
          placeholder={{ label: "Country", value: null }}
          value={country}
          style={{
            inputIOS: { color: 'white', flex: 1 },
            inputAndroid: { color: 'white', flex: 1 },
          }}
          Icon={() => {
            return <Icon name="arrow-drop-down" size={24} color="white" />;
          }}
        />
      </View>

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

