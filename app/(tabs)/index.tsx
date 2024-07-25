

import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native";
import tw from "tailwind-react-native-classnames";

const backgroundImage = require("../../assets/images/image2.jpg");
const logoImage = require("../../assets/images/africa3.png");

export default function App() {
  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={backgroundImage}
        style={tw`flex-1`}
        imageStyle={tw`rounded-md`}
        resizeMode="cover"
      >
        <View
          style={tw`absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70`}
        />
        <View style={tw`flex-1 justify-center items-center`}>
          <Image
            source={logoImage}
            style={tw`w-41 h-40`}
            resizeMode="contain"
          />
          <View style={tw`w-60 flex justify-center items-ceneter `}>
            <Text style={tw`text-white text-sm text-center`}>
              We'll help you create a new account in few easy steps.
            </Text>
          </View>

          <View style={tw`gap-4 mt-4`}>
            <TouchableOpacity style={tw`bg-yellow-900 py-3 px-4 rounded-full`}>
              <Text style={tw`text-white  font-semibold px-20 `}>SIGNUP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-yellow-600 py-3 px-4 rounded-full mt-2`}>
              <Text style={tw`text-white  font-semibold px-20`}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
