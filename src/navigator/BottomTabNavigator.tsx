import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ScreenTwo from "../screens/ScreenTwo";
import RegisterScreen from "../screens/RegisterScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
