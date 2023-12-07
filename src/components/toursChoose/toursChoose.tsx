import React from 'react';
import {  ScrollView } from 'react-native';
import ToursChooseLine from '../toursChooseLine/toursChooseLine'; // Adjust the import path accordingly

const ToursChoose:React.FC<{ navigation: any }> = ({navigation}) => {
  let tours = [
    {
      "title": "Tour 1",
      "creche": ["Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche 3","Crèche 1", "Crèche 2", "Crèche rerza"],
    },
    {
      "title": "Tour 2",
      "creche": ["Crèche 1", "Crèche 1", "Crèche 2", "Crèche 2", "Crèche 1", "Crèche 2", "Crèche 1", "Crèche 2", "Crèche 3"],
    }
  ];

  return (
    <ScrollView style={styles.toursChoose}>
      {tours.map((tour, index) => (
        <ToursChooseLine key={index} value={tour} navigation={navigation}/>
      ))}
    </ScrollView>
  );
}
const styles = {
  toursChoose: {
    padding: 20,
  },
};


export default ToursChoose;
