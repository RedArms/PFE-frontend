import React from 'react';
import { View,Button } from 'react-native';
import styles from './ButtonStyle';

interface ButtonProps {
    valueString: string;
    method: () => void;
  }

const ButtonChoose:React.FC<ButtonProps>= (props) => {
  

  return (
    <View style={styles.button}>
      <Button title={props.valueString} onPress={props.method} color="#FFFFFF" />
    </View>
  );
};


export default ButtonChoose;
