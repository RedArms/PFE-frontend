import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ScreenTwo from "../screens/ScreenTwo";
import { UserContext } from "../contexts/UserContext";
import AdminScreen from "../screens/admin/AdminScreen";
import DelivererScreen from "../screens/deliverer/DelivererScreen";
import ClientsScreen from "../screens/clients/ClientsScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const { isAuthenticated, isAdmin } = useContext(UserContext);
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      
      {isAuthenticated && isAdmin && (
        <Tab.Screen name="Admin" component={AdminScreen} />
      )}
      {isAuthenticated && isAdmin && (
        <Tab.Screen name="Clients" component={ClientsScreen} />
      )}
      {isAuthenticated && !isAdmin && (<Tab.Screen name="Deliverer" component={DelivererScreen} />)}
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
