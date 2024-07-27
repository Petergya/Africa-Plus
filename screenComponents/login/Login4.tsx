
// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import tw from "tailwind-react-native-classnames";
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../types'; 

// type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

// type Props = {
//   navigation: LoginScreenNavigationProp;
// };

// export default function Login({ navigation }: Props) {
//   return (
//     <View style={tw`flex-1 justify-center items-center`}>
//       <View>
//         <Text style={tw`text-2xl font-extrabold text-white`}>Welcome Back</Text>
//       </View>
//       <TouchableOpacity
//         style={tw`bg-yellow-500 py-4 px-4 rounded-full mt-4`}
//         onPress={() => navigation.navigate('Home')}
//       >
//         <Text style={tw`text-white font-semibold px-20`}>FINISH</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

const Success = require('../../assets/images/success.png');

type LoginP4NavigationProp = StackNavigationProp<RootStackParamList, 'Login4'>;

type Props = {
  navigation: LoginP4NavigationProp;
};

export default function Login4({ navigation }: Props) {
  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <Image
        source={Success}
        style={tw`h-40 w-56 mb-4`}
        resizeMode="contain"
      />
      <Text style={tw`w-56 text-2xl text-center mb-2 font-extrabold text-yellow-500`}>Your password has been reset</Text>
      <Text style={tw`w-56 text-sm mb-4 text-white text-center`}>
      You have successfully reset
      your password.
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
