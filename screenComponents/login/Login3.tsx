// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import tw from 'tailwind-react-native-classnames'

// const Login2 = () => {
//   return (
//     <View style={tw`flex-1 justify-center items-center`}>
//         <View>
//         <Text style={tw`text-2xl font-extrabold text-white`}>Forgot Password</Text>
//         </View>
      
//     </View>
//   )
// }

// export default Login2
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; 

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function Login3({ navigation }: Props) {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <View>
        <Text style={tw`text-2xl font-extrabold text-white`}>Welcome Back</Text>
      </View>
      <TouchableOpacity
        style={tw`bg-yellow-500 py-4 px-4 rounded-full mt-4`}
        onPress={() => navigation.navigate('Login4')}
      >
        <Text style={tw`text-white font-semibold px-20`}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

