import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import API_URL from "../utils/config";
import { Tour } from "../models/tour";
import { ClientContext } from "./ClientContext";

interface TourContextProps {
  getToursToday: () => Promise<Tour[]>;
}

const TourContext = createContext<TourContextProps>({
  getToursToday: async () => [],
});

const TourContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const { getClients } = useContext(ClientContext);
  
  const getToursToday = async (): Promise<Tour[]> => {
    try {
        const response = await axios.get(API_URL + "/tours/getAllNotDelivered");
        const tourData: Tour[] = response.data;
        await Promise.all(
          tourData.map(async (tour) => {
            const geoZoneResponse = await axios.get(API_URL + `/tours/${tour.tour}`);
            tour.geo_zone = geoZoneResponse.data.geo_zone;
            tour.clients = await getClients(tour.tour);
          })
        );
        return tourData;
      } catch (error) {
        console.error("Error fetching tours:", error);
        return [];
      }
  };

  const exposedValue: TourContextProps = {
    getToursToday,
  };

  return (
    <TourContext.Provider value={exposedValue}>{children}</TourContext.Provider>
  );
};

export { TourContext, TourContextProvider };
