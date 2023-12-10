import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import ToursChooseLine from '../toursChooseLine/toursChooseLine'; // Adjust the import path accordingly
import { TourContext } from '../../contexts/TourContext';
import { Tour } from '../../models/tour';
import {Client } from '../../models/client';

const ToursChoose: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { getToursToday } = useContext(TourContext);
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const fetchedTours = await getToursToday();
        setTours(fetchedTours);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchTours();
  }, [getToursToday]); // Add getToursToday to the dependency array

  return (
    <ScrollView style={styles.toursChoose}>
      {tours.map((tour, index) => (
        <ToursChooseLine key={index} title={tour.geo_zone} creche={tour.clients} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

const styles = {
  toursChoose: {
    padding: 20,
  },
};

export default ToursChoose;
