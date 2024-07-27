
export type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
  Login: undefined;
  Login2: undefined;
  Login3: { email: string };
  Login4: {
    enterNewPassword: string;
    reenterNewPassword: string;
  }
  
  SignupP1: undefined;
  SignupP2: { email: string; password: string; };
  SignupP3: {  gender: string; birthday: string; country: string; };
  SignupP4: { email: string; password: string; };
};

