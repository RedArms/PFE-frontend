import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { UserContext } from "../contexts/UserContext";
import AdminScreen from "../screens/admin/AdminScreen";
import ClientsScreen from "../screens/clients/ClientsScreen";
import MemberManagement from "../screens/admin/MemberManagementScreen";
import ItemManagementScreen from "../screens/admin/ItemManagementScreen";
import DelivererChooseScreen from "../screens/deliverer/DelivererChooseScreen";
import Logo from "../components/Logo/Logo";
import { View } from "react-native";
import DelivererTour from "../screens/deliverer/DelivererTour";
import Profile from "../screens/Profile/Profile";
const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const { isAuthenticated, isAdmin } = useContext(UserContext);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      

      {isAuthenticated && isAdmin && (
        <>
          <Tab.Screen name="Gestion membre" component={MemberManagement} />
          <Tab.Screen name="Clients" component={ClientsScreen} />
          <Tab.Screen
            name="ItemManagement"
            component={ItemManagementScreen}
            options={{
              tabBarLabel: "Articles",
            }}
          />
        </>
      )}
      {isAuthenticated && !isAdmin && (
        <>
       
       <Tab.Screen name="DelivererTour" component={DelivererTour} options={{
            tabBarLabel: "Mes livraisons",
          }} />
        <Tab.Screen name="DelivererChoose" component={DelivererChooseScreen} 
        options={{
          tabBarLabel: "Choix livraison",
        }}
        />
        </>
      )}
      {isAuthenticated && (
          <Tab.Screen name="Profile" component={Profile}  options={{
            tabBarLabel: "Profil",
          }}/>        
      )
      }
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
