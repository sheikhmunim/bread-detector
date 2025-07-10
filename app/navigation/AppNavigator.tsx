import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import type { RootStackParamList, HomeScreenProps } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: HomeScreenProps) => ({
          title: "Home",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Settings")}
              hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
              style={{
                paddingHorizontal: 8,
                backgroundColor: "transparent",
              }}
              android_ripple={null}
            >
              <Ionicons name="settings-outline" size={24} color="black" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
