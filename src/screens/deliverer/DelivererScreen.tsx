import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { UserContext } from "../../contexts/UserContext";

const DelivererScreen: React.FC = () => {
    const { logout } = useContext(UserContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Deliverer Page</Text>
        <Button title="Logout" onPress={logout} />
    </View>
  );
};



export default DelivererScreen;
