// import React from 'react';
// import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
// import tw from "tailwind-react-native-classnames";
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../types';

//

// type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

// type Props = {
//   navigation: LoginScreenNavigationProp;
// };

// export default function Login2({ navigation }: Props) {
//     function setEmail(_text: string): void {
//         throw new Error('Function not implemented.');
//     }

//   return (
//     <View style={tw`flex-1 justify-center items-center`}>
//         <Image
//         source={passImage}
//         style={tw`h-64 w-full `}
//         resizeMode="contain"
//       />
//       <View>
//         <Text style={tw`text-2xl font-extrabold text-white `}>Forgot Password</Text>
//         <Text style={tw`text-center text-white`}>Enter the email attached to your account.</Text>
//       </View>
//       <TextInput
//         style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2 text-white`}
//         placeholder="Email"
//         placeholderTextColor="white"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TouchableOpacity
//         style={tw`bg-yellow-500 py-4 px-4 rounded-full mt-4`}
//         onPress={() => navigation.navigate('Login3')}
//       >
//         <Text style={tw`text-white font-semibold px-20`}>Forgot Password</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

const passImage = require("../../assets/images/pass.png");

type Login2NavigationProp = StackNavigationProp<RootStackParamList, "Login2">;

type Props = {
  navigation: Login2NavigationProp;
};

export default function Login2({ navigation }: Props) {
  const [email, setEmail] = useState<string>(""); 

  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <Image source={passImage} style={tw`h-64 w-full `} resizeMode="contain" />
      <Text style={tw`text-2xl mb-4 text-white`}>Forgot Password</Text>
      <Text style={tw`text-sm mb-2 text-white w-60 text-center`}>
        Enter the email attached to your account.
      </Text>

      <TextInput
        style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2 text-white`}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={tw`py-4 px-4 mt-4`}
        onPress={() => {
          if (email) {
            navigation.navigate('Login3', { email }); 
          } else {
            alert("Please enter your email.");
          }
        }}
      >
        <Text
          style={tw`border-2 py-4 rounded-full border-yellow-500 text-yellow-500 text-center font-semibold px-24`}
        >
          Forgot Password
        </Text>
      </TouchableOpacity>
    </View>
  );
}
