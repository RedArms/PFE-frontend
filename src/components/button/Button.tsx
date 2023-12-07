import React from 'react';
import { View,Button } from 'react-native';

interface ButtonProps {
    valueString: string;
    method: () => void;
  }

const ButtonChoose:React.FC<ButtonProps>= (props) => {
  

  return (
    <View style={{ padding: 20 }}>
      <Button title={props.valueString} onPress={props.method} />
    </View>
  );
};

export default ButtonChoose;
