
import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'; // Adjust the path as necessary

const backgroundImage = require('../assets/images/bg.jpg');
const logoImage = require('../assets/images/africa3.png');

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={tw`flex-1`}>
      <ImageBackground 
        source={backgroundImage} 
        style={tw`flex-1`} 
        imageStyle={tw`rounded-md opacity-50`}
        resizeMode="cover"
      >
        <View style={tw`absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50`} />
        <View style={tw`flex-1 justify-center items-center`}>
          <Image 
            source={logoImage} 
            style={tw`h-40 w-56`} 
            resizeMode="contain"
          />
          <View style={tw`w-60 mt-2`}>
            <Text style={tw`text-white text-sm text-center`}>
              We'll help you create a new account in a few easy steps
            </Text>
          </View>
          <View style={tw`mt-4`}>
            <TouchableOpacity 
              style={tw`bg-yellow-900 py-4 px-4 rounded-full`}
              onPress={() => navigation.navigate('SignupP1', undefined)}
            >
              <Text style={tw`text-white font-semibold px-20`}>SIGNUP</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={tw`bg-yellow-500 py-4 px-4 rounded-full mt-4`}
              onPress={() => navigation.navigate('Login', undefined)}
            >
              <Text style={tw`text-white font-semibold px-20`}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
