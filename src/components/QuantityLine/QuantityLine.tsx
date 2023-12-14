import React from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import styles from './QuantityStyle';

interface QuantityLineProps {
  
    label: string;
    quantity: number;
    size?: string;
}


const QuantityLine : React.FC<QuantityLineProps> = ({label,quantity,size}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>{quantity}</Text>
      </View>
      <Text style={styles.text}>{label} {size ? `Taille ${size}`: ``}</Text>
    </TouchableOpacity>
  );
};

export default QuantityLine;