import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Button } from 'react-native';
import styles from './toursChooseLineStyle';
import ButtonChoose from '../button/Button';
interface ToursChooseLineProps {
  value: {
    title: string;
    creche: string[];
  },
  navigation: any;
}

const ToursChooseLine: React.FC<ToursChooseLineProps> = (props) => {
  const [isCrecheVisible, setCrecheVisibility] = useState(false);
  const navigation = props.navigation;
  const toggleCrecheVisibility = () => {
    setCrecheVisibility(!isCrecheVisible);
  };

  const maxHeight = Dimensions.get('window').height * 0.5;

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.toursChooseLine}>
        <TouchableWithoutFeedback onPress={toggleCrecheVisibility}>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>{props.value.title}</Text>
            <ButtonChoose valueString="Choisir" method={() => {navigation.navigate('DelivererContent',{id : 23} )}}/> 
          </View>
        </TouchableWithoutFeedback>

        {isCrecheVisible && (
          <ScrollView style={{ ...styles.crecheContainer, maxHeight }}>
            {props.value.creche.map((creche, index) => (
              <Text style={styles.crecheLine} key={index}>
                {creche}
              </Text>
            ))}
          </ScrollView>
        )}
      </View>
    </ScrollView>
  );
};

export default ToursChooseLine;
