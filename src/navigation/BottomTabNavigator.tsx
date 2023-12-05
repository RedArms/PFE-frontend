import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ScreenTwo from "../screens/ScreenTwo";
import RegisterScreen from "../screens/auth/RegisterScreen";
import { UserContext } from "../contexts/UserContext";
import AdminScreen from "../screens/admin/AdminScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const { isAuthenticated, isAdmin } = useContext(UserContext);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      {isAuthenticated && isAdmin && (
        <Tab.Screen name="Admin" component={AdminScreen} />
      )}
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
