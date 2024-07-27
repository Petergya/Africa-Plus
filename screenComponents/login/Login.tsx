
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; 


const LoginImage = require('../../assets/images/down.png');

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function Login({ navigation }: Props) {
  // Define state for email and password
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-2xl mb-4 text-white text-yellow-500 font-bold mt-64`}>WELLCOME BACK</Text>
      

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
      <View>
      <TouchableOpacity
        style={tw` py-4 px-4  mt-4`}
        onPress={() => navigation.navigate('Login2')}
      >
        <Text style={tw`border-2 py-4 rounded-full border-yellow-500 text-yellow-500 text-center font-semibold px-36`}>LOGIN</Text>
      </TouchableOpacity>
      <View style={tw`flex flex-row justify-around space-x-12 `}>
        <View>
        <Text style={tw`text-white`}>Create Password</Text>
        </View>
        <View>
        <Text style={tw`text-white`}>Password</Text>
        </View>
      
      
      </View>
      </View>
     
      <Image
        source={LoginImage}
        style={tw`h-64 w-full `}
        resizeMode="contain"
      />
      
    </View>
  );
}

