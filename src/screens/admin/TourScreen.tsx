import React, { useState, useEffect } from "react";
import { View, Text, Button } from 'react-native';
import { Tour } from "../../models/tour";

import {
    getAllTours as getAllToursApi,
    getAllToursToday as getAllToursTodayApi,
 } from "../../services/toursManagementService";
  
const ToursScreen: React.FC = () => {
    const [toursToday, setToursToday] = useState<Tour[]>([]);

    useEffect(() => {
        const fetchTours = async () => {
          try {
            const allToursToday = await getAllToursTodayApi();
            setToursToday(allToursToday); // Mettez à jour l'état avec les tours d'aujourd'hui
              } catch (error) {
            console.error("Erreur lors du chargement des tours:", error);
          }
        };
    
        fetchTours();
      }, []);
    
    return (
        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Welcome to Admin Page </Text> 

            <Text>Tours Today:</Text>
                {toursToday.map((tour, index) => (
                    <View key={index} style={{ marginBottom: 10 }}>
                        <Text>Tour: {tour.tour}</Text>
                        <Text>Delivery Person: {tour.delivery_person}</Text>
                        <Text>Date: {tour.date}</Text>
                     </View>
      ))}

            <Button title="Logout"/>

        </View>
    );
};

export default ToursScreen;
