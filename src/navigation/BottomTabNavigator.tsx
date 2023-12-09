import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { UserContext } from "../contexts/UserContext";
import AdminScreen from "../screens/admin/AdminScreen";
import MemberManagement from "../screens/admin/MemberManagementScreen";
import ItemManagementScreen from "../screens/admin/ItemManagementScreen";
import DelivererScreen from "../screens/deliverer/DelivererChooseScreen";
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
          <Tab.Screen name="ItemManagement" component={ItemManagementScreen}/>
        </>
        )}
      {isAuthenticated && !isAdmin && (
      <Tab.Screen name="Deliverer" component={DelivererScreen} />)}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
