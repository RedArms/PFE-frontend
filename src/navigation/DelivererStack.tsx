// deliverer stack navigator
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DelivererChooseScreen from "../screens/deliverer/DelivererChooseScreen";
import DelivererContentScreen from "../screens/deliverer/DelivererContentScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import DelivererTours from "../screens/deliverer/DelivererTours";
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
      <DelivererStack.Screen name="Deliverer" component={DelivererChooseScreen} />
      <DelivererStack.Screen name="DelivererContent" component={DelivererContentScreen}/>
       <DelivererStack.Screen name="DelivererTours" component={DelivererTours}/>
    </DelivererStack.Navigator>
  );
};

export default Deliverer;
