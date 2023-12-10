import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminScreen from "../screens/admin/AdminScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import ItemManagementScreen from "../screens/admin/ItemManagementScreen";
const AdminStack = createStackNavigator();
/*
AdminStack is a stack navigator, which means it will be used to navigate between screens.
AdminStack will be shown when user is authenticated and is an admin.
*/
const Admin = () => {
  return (
    <AdminStack.Navigator>
        <AdminStack.Screen name="BottomTab" component={BottomTabNavigator} 
      options={{headerShown: false}}/>
      <AdminStack.Screen name="Admin" component={AdminScreen} />
      <AdminStack.Screen name="ItemManagement" component={ItemManagementScreen} />
    </AdminStack.Navigator>
  );
};

export default Admin;
