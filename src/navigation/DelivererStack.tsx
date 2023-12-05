// deliverer stack navigator
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DelivererScreen from "../screens/deliverer/DelivererScreen";
import BottomTabNavigator from "./BottomTabNavigator";
const DelivererStack = createStackNavigator();

/*
DelivererStack is a stack navigator, which means it will be used to navigate between screens.
DelivererStack will be shown when user is authenticated and is not admin.
*/
const Deliverer: React.FC = () => {
  return (
    <DelivererStack.Navigator>
      <DelivererStack.Screen name="BottomTab" component={BottomTabNavigator} 
      options={{headerShown: false}}/>
      <DelivererStack.Screen name="Deliverer" component={DelivererScreen} />
    </DelivererStack.Navigator>
  );
};

export default Deliverer;
