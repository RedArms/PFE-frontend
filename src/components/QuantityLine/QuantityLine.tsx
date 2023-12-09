import React, { useState } from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import styles from './QuantityStyle';

interface QuantityLineProps {
    value: {
    label: string;
    quantity: number;
    }
}


const QuantityLine : React.FC<QuantityLineProps> = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>{props.value.quantity}</Text>
      </View>
      <Text style={styles.text}>{props.value.label}</Text>
    </TouchableOpacity>
  );
};

export default QuantityLine;