import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import API_URL from "../utils/config";
import { Tour } from "../models/tour";
import { ClientContext } from "./ClientContext";
import { BoxeContext } from "./BoxeContext";

interface TourContextProps {
  getToursToday: () => Promise<Tour[]>;
  setDelivererDB: (id_tour: number, date : String, id_user: any) => void;
}

const TourContext = createContext<TourContextProps>({
  getToursToday: async () => [],
  setDelivererDB: async (id_tour: number, date : String, id_user: any) => {},
});

const TourContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [tours, setTours] = useState<Tour[]>([]);
  const { getClients } = useContext(ClientContext);
  const { getBoxeDeliverer } = useContext(BoxeContext);
  
  
  const getToursToday = async (): Promise<Tour[]> => {
    if(tours.length === 0){
      try {
        
        const response = await axios.get(API_URL + "/tours/getAllNotDelivered");
        const tourData: Tour[] = response.data;
        
        await Promise.all(
          tourData.map(async (tour) => {
            const geoZoneResponse = await axios.get(API_URL + `/tours/${tour.tour_id}`);
            tour.geo_zone = geoZoneResponse.data.geo_zone;
            tour.clients = await getClients(tour.tour_id);
            tour.content= await getBoxeDeliverer(tour.tour_id);
            
          })
        );
          setTours(tourData);
          return tourData;
          
      } catch (error) {
        console.error("Error fetching tours:", error);
        return [];
      }
    }
      return tours;
  };

  

  const setDelivererDB = async (id_tour: number, date : String, id_user: number) => {
    try {
      console.log(id_tour);
      console.log(date);
      console.log(id_user);      
      
      const response = await fetch(API_URL + `/tours/setDeliverer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "tour": id_tour,
          "date": date,
          "delivery_person": id_user ,
        }),
      });
      console.log(response);
      
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error during fetch or JSON parsing:", error);
    }
  };


  const exposedValue: TourContextProps = {
    getToursToday,
    setDelivererDB,
  };

  return (
    <TourContext.Provider value={exposedValue}>{children}</TourContext.Provider>
  );
};

export { TourContext, TourContextProvider };
