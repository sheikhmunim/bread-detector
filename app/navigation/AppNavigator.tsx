import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, View } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SearchScreen from "../screens/SearchScreen";
import type {
  RootStackParamList,
  HomeScreenProps,
} from "../utils/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    {/* Set initial route back to login */}
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
            <View style={{ flexDirection: "row", gap: 12 }}>
              <Pressable
                onPress={() => navigation.navigate("Search")}
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                style={{ paddingHorizontal: 4 }}
              >
                <Ionicons name="search-outline" size={24} color="black" />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Settings")}
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                style={{ paddingHorizontal: 4 }}
              >
                <Ionicons name="settings-outline" size={24} color="black" />
              </Pressable>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Search" }}
      />

      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
