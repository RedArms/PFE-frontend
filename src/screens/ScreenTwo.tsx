import React from "react";
import { View, Text, Button } from "react-native";

const ScreenTwo: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [count, setCount] = React.useState(0);

  return (
    <View>
      <Text>Deuxieme ecran</Text>

      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount((c) => c + 1)} />
      <View>
        <Button
          title="Go to Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default ScreenTwo;
