// screenComponents/SignupP1.tsx
// import React from 'react';
// import { View, Text } from 'react-native';
// import tw from "tailwind-react-native-classnames";

// export default function SignupP1() {
//   return (
//     <View style={tw`flex-1 justify-center items-center`}>
//       <Text style={tw`text-2xl`}>Signup Page 1</Text>
//     </View>
//   );
// }

// screenComponents/SignupP1.tsx
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import tw from "tailwind-react-native-classnames";
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../types'; 

// type SignupP1NavigationProp = StackNavigationProp<RootStackParamList, 'SignupP1'>;

// type Props = {
//   navigation: SignupP1NavigationProp;
// };

// export default function SignupP1({ navigation }: Props) {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   return (
//     <View style={tw`flex-1 justify-center items-center p-4`}>
//       <Text style={tw`text-2xl mb-4`}>What's your name?</Text>
//       <TextInput
//         style={tw`w-full p-3 bg-gray-200 rounded mb-4`}
//         placeholder="First Name"
//         value={firstName}
//         onChangeText={setFirstName}
//       />
//       <TextInput
//         style={tw`w-full p-3 bg-gray-200 rounded mb-4`}
//         placeholder="Last Name"
//         value={lastName}
//         onChangeText={setLastName}
//       />
//       <TouchableOpacity
//         style={tw`bg-blue-500 py-3 px-6 rounded-full`}
//         onPress={() => navigation.navigate('SignupP2', { firstName, lastName })}
//       >
//         <Text style={tw`text-white font-semibold`}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

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
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <Text style={tw`text-2xl mb-4 text-white`}>Identify Yourself</Text>
      <Text style={tw`text-sm mb-2 text-white w-60 text-center`}>Fill out your details so people know more about you.</Text>

      <TextInput
        style={tw`w-full border-b-2 border-gray-300 mb-4 p-2 text-white`}
        placeholder="First Name"
        placeholderTextColor="white"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={tw`w-full border-b-2 border-gray-300 mb-4 p-2 mt-10 text-white`}
        placeholder="Last Name"
        placeholderTextColor="white"
        value={lastName}
        onChangeText={setLastName}
      />

      <TouchableOpacity
        style={tw`bg-yellow-500 py-4 px-20 rounded-full mt-16`}
        onPress={() => {
          if (firstName && lastName) {
            navigation.navigate('SignupP2', { firstName, lastName });
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
