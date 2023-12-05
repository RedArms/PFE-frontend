import React from "react";

// navigation react native
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigator/BottomTabNavigator";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
   
  );
};



export default App;
