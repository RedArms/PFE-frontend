import React, { useState, useEffect } from "react";
import { View, Text, Button } from 'react-native';
import { Tour } from "../../models/tour";
import { useRoute } from "@react-navigation/native";
import {
    getOrders as getOrdersApi,
 } from "../../services/toursManagementService";
import { Order } from "../../models/order";


const TourDetailScreen: React.FC = () => {
    const [order, setOrder] = useState<Order[]>([]);  

    //@ts-ignore
    const t = useRoute().params?.tour as Tour ;
    

    useEffect(() => {
        const fetchTours = async () => {
          try {
            const o = await getOrdersApi(t.tour,t.date)
            setOrder(o);
              } catch (error) {
            console.error("Erreur lors du chargement des tours:", error);
          }
        };
    
        fetchTours();
      }, []);


    return (
        
        <View>
            <Text>Tournée {t.date} du {t.tour}</Text>
            {order.map((order) => (
            
            <View key={order.order_id} style={{ marginBottom: 10 }}>
                <Text>Id: {order.order_id}</Text>
                <Text>Client: {order.client}</Text>
                <Text>Status: {order.status}</Text>

                <Text>Tour: {order.tour}</Text>
             </View>

            ))}        
        </View>
        );
}

export default TourDetailScreen;