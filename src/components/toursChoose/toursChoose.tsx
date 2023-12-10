import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import ToursChooseLine from '../toursChooseLine/toursChooseLine';
import { TourContext } from '../../contexts/TourContext';
import { Tour } from '../../models/tour';
import { Client } from '../../models/client';

interface ToursChooseProps {
  navigation : any
}

const ToursChoose: React.FC<ToursChooseProps> = (props) => {
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
  }, []);

  return (
    <ScrollView style={styles.toursChoose}>
      {tours.map((tour, index) => (
        <ToursChooseLine key={index} id={tour.tour} title={tour.geo_zone} creche={tour.clients} navigation={props.navigation} />
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
