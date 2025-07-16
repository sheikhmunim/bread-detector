import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Settings: undefined;
  Search: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;
