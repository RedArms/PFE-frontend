import React, { useState, useEffect } from "react";
import { View, Text, Button,RefreshControl,ScrollView,} from 'react-native';
import { Tour } from "../../models/tour";
import {
    getAllTours as getAllToursApi,
    getAllToursToday as getAllToursTodayApi,
    getToursByDate as getToursByDateApi
 } from "../../services/toursManagementService";
 import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'; 
import { useRoute } from "@react-navigation/native";


const ToursScreen: React.FC<{navigation : any}> = ({navigation}) => {
    const [toursToday, setToursToday] = useState<Tour[]>([]);  
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);

    const onChange = (_event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
    
      const showMode = (currentMode: React.SetStateAction<string>) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

      
    useEffect(() => {
        const fetchTours = async () => {
          try {
            const date_formated = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
            const allToursToday = await getToursByDateApi(date_formated);
            setToursToday(allToursToday); // Mettez à jour l'état avec les tours d'aujourd'hui
              } catch (error) {
            console.error("Erreur lors du chargement des tours:", error);
          }
        };
    
        fetchTours();
      }, [date,refreshing]);


    const pressHandler = (tour:Tour) => {
        navigation.navigate('TourDetail',{tour});
    }

    return (
        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ScrollView
            style={{ padding: 10,top: 50,}}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>

                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      //@ts-ignore
                      mode={mode}
                      is24Hour={true}
                      onChange={onChange}
                    />

                    <Text>Tours {date.getFullYear()}-{date.getMonth()}-{date.getDate()}:</Text>

                        {toursToday.map((tour, index) => (

                            <View key={index} style={{ marginBottom: 10 }}>
                                <Text>Tour: {tour.tour}</Text>
                                <Text>Delivery Person: {tour.delivery_person || "Pas encore assigné"}</Text>
                                <Text>Date: {tour.date}</Text>
                                
                                <Button title="Go" onPress={()=>{pressHandler(tour)}}/>
                             </View>

                    ))}


            </ScrollView>
        </View>
    );
};

export default ToursScreen;
