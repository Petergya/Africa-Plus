import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const logoImage = require('../assets/images/africa.jpg');

const Box = () => {
  return (
    <View style={tw`w-full h-44 bg-red-500 rounded-md flex-row justify-between items-center p-4`}>
      <View style={tw`w-2/6 h-full`}>
        <ImageBackground source={logoImage} style={tw`w-full h-full`} imageStyle={tw`rounded-md`}>
          {/* Content inside ImageBackground if needed */}
        </ImageBackground>
      </View>
      <View style={tw`w-2/6`}>
        <Text style={tw`text-white text-xs font-bold`}>
          join our world of experience customer service
        </Text>
      </View>
    </View>
  );
};

export default Box;


