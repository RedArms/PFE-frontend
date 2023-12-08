import React from "react";
import { View, Image } from "react-native";

const Logo: React.FC = () => {
  return (
    <View >
      <Image
        source={require("../../../assets/Snappies-Logo.png")}
        style={{ width: 175, height: 175 , resizeMode: 'contain' , marginBottom: 20}}
      />
    </View>
  );
};

export default Logo;
