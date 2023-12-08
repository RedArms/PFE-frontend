import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ScreenTwo from "../screens/ScreenTwo";
import { UserContext } from "../contexts/UserContext";
import AdminScreen from "../screens/admin/AdminScreen";
import MemberManagement from "../screens/admin/MemberManagementScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const { isAuthenticated, isAdmin } = useContext(UserContext);
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      
      {isAuthenticated && isAdmin && (
        <>
          <Tab.Screen name="Admin" component={AdminScreen} />
          <Tab.Screen name="Gestion membre" component={MemberManagement} />
        </>
        )}
      {isAuthenticated && !isAdmin && (
      <Tab.Screen name="Deliverer" component={ScreenTwo} />)}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
