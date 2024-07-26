import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

const Success = require('../../assets/images/success.png');

type SignupP4NavigationProp = StackNavigationProp<RootStackParamList, 'SignupP4'>;

type Props = {
  navigation: SignupP4NavigationProp;
};

export default function Signup4({ navigation }: Props) {
  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <Image
        source={Success}
        style={tw`h-40 w-56 mb-4`}
        resizeMode="contain"
      />
      <Text style={tw`text-2xl mb-2 text-white`}>Account Created</Text>
      <Text style={tw`text-sm mb-4 text-white text-center`}>
        Your account has been created successfully.
      </Text>
      <TouchableOpacity
        style={tw`bg-yellow-500 py-4 px-20 rounded-full`}
        onPress={() => {
          
          navigation.navigate('Home'); 
        }}
      >
        <Text style={tw`text-white font-semibold`}>FINISH</Text>
      </TouchableOpacity>
    </View>
  );
}

