import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type SignupP2NavigationProp = StackNavigationProp<RootStackParamList, 'SignupP2'>;

type Props = {
  navigation: SignupP2NavigationProp;
};

export default function SignupP2({ navigation }: Props) {
  const [gender, setGender] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const handleNext = () => {
    if (gender && day && month && year && country) {
      const birthday = `${day}/${month}/${year}`;
      navigation.navigate('SignupP3', { gender, birthday, country });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center p-4 bg-black`}>
      <Text style={tw`text-2xl mb-4 text-white`}>Create Your Account</Text>
      <Text style={tw`text-sm mb-2 text-white w-60 text-center`}>
        Fill out your details to complete the signup process.
      </Text>

      <TextInput
        style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2 text-white`}
        placeholder="gender"
        placeholderTextColor="white"
        value={gender}
        onChangeText={setGender}
      />

      <View style={tw`flex-row justify-between w-80`}>
        <TextInput
          style={tw`w-24 border-b-2 border-gray-300 mb-4 p-2 text-white`}
          placeholder="day"
          placeholderTextColor="white"
          value={day}
          onChangeText={setDay}
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          style={tw`w-24 border-b-2 border-gray-300 mb-4 p-2 text-white`}
          placeholder="month"
          placeholderTextColor="white"
          value={month}
          onChangeText={setMonth}
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          style={tw`w-24 border-b-2 border-gray-300 mb-4 p-2 text-white`}
          placeholder="year"
          placeholderTextColor="white"
          value={year}
          onChangeText={setYear}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>

      <TextInput
        style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2 text-white`}
        placeholder="country"
        placeholderTextColor="white"
        value={country}
        onChangeText={setCountry}
      />

      <TouchableOpacity
        style={tw`bg-yellow-500 py-4 px-20 rounded-full mt-16`}
        onPress={handleNext}
      >
        <Text style={tw`text-white font-semibold`}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import CountryPicker, { Country } from 'react-native-country-picker-modal';
// import tw from 'tailwind-react-native-classnames';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../types';

// type SignupP2NavigationProp = StackNavigationProp<RootStackParamList, 'SignupP2'>;

// type Props = {
//   navigation: SignupP2NavigationProp;
// };

// export default function SignupP2({ navigation }: Props) {
//   const [gender, setGender] = useState<string>('');
//   const [day, setDay] = useState<string>('');
//   const [month, setMonth] = useState<string>('');
//   const [year, setYear] = useState<string>('');
//   const [country, setCountry] = useState<string>('');
//   const [isCountryPickerVisible, setCountryPickerVisible] = useState<boolean>(false);

//   const handleNext = () => {
//     if (gender && day && month && year && country) {
//       const birthday = `${day}/${month}/${year}`;
//       navigation.navigate('SignupP3', { gender, birthday, country });
//     } else {
//       alert('Please fill out all fields.');
//     }
//   };

//   return (
//     <View style={tw`flex-1 justify-center items-center p-4 bg-black`}>
//       <Text style={tw`text-2xl mb-4 text-white`}>Create Your Account</Text>
//       <Text style={tw`text-sm mb-2 text-white w-60 text-center`}>
//         Fill out your details to complete the signup process.
//       </Text>

//       <View style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2`}>
//         <Picker
//           selectedValue={gender}
//           onValueChange={(itemValue) => setGender(itemValue)}
//           style={tw`text-white`}
//         >
//           <Picker.Item label="Select Gender" value="" />
//           <Picker.Item label="Male" value="male" />
//           <Picker.Item label="Female" value="female" />
//           <Picker.Item label="Other" value="other" />
//         </Picker>
//       </View>

//       <View style={tw`flex-row justify-between w-80`}>
//         <View style={tw`w-24 border-b-2 border-gray-300 mb-4 p-2`}>
//           <Picker
//             selectedValue={day}
//             onValueChange={(itemValue) => setDay(itemValue)}
//             style={tw`text-white`}
//           >
//             <Picker.Item label="Day" value="" />
//             {Array.from({ length: 31 }, (_, i) => (
//               <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
//             ))}
//           </Picker>
//         </View>

//         <View style={tw`w-24 border-b-2 border-gray-300 mb-4 p-2`}>
//           <Picker
//             selectedValue={month}
//             onValueChange={(itemValue) => setMonth(itemValue)}
//             style={tw`text-white`}
//           >
//             <Picker.Item label="Month" value="" />
//             {Array.from({ length: 12 }, (_, i) => (
//               <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
//             ))}
//           </Picker>
//         </View>

//         <View style={tw`w-24 border-b-2 border-gray-300 mb-4 p-2`}>
//           <Picker
//             selectedValue={year}
//             onValueChange={(itemValue) => setYear(itemValue)}
//             style={tw`text-white`}
//           >
//             <Picker.Item label="Year" value="" />
//             {Array.from({ length: 100 }, (_, i) => (
//               <Picker.Item key={i} label={`${2024 - i}`} value={`${2024 - i}`} />
//             ))}
//           </Picker>
//         </View>
//       </View>

//       <TouchableOpacity
//         style={tw`w-80 border-b-2 border-gray-300 mb-4 p-2`}
//         onPress={() => setCountryPickerVisible(true)}
//       >
//         <Text style={tw`text-white`}>
//           {country ? country : 'Select Country'}
//         </Text>
//       </TouchableOpacity>

//       <CountryPicker
//         withFilter
//         withFlag
//         withCountryNameButton
//         withAlphaFilter
//         withCallingCode
//         withEmoji
//         visible={isCountryPickerVisible}
//         onSelect={(selectedCountry: Country) => {
//           // Ensure the country name is a string
//           const countryName = typeof selectedCountry.name === 'string' ? selectedCountry.name : '';
//           setCountry(countryName);
//           setCountryPickerVisible(false);
//         } }
//         onClose={() => setCountryPickerVisible(false)} countryCode={'AF'}      />

//       <TouchableOpacity
//         style={tw`bg-yellow-500 py-4 px-20 rounded-full mt-16`}
//         onPress={handleNext}
//       >
//         <Text style={tw`text-white font-semibold`}>NEXT</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

