import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ route }) => {
  const { email } = route.params || {};

  return (
    <View>
      <Text>Welcome, {email}</Text>
    </View>
  );
};

export default HomeScreen;
