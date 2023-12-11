import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import API_URL from "../utils/config";
import { Boxe } from "../models/boxe";
import { ArticleContext } from "./ArticleContext";

interface BoxeContextProps {
  getBoxeDeliverer: (id: number) => Promise<Boxe[]>;
}

const BoxeContext = createContext<BoxeContextProps>({
  getBoxeDeliverer: (id: number) => Promise.resolve([]),
});

const BoxeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { getArticle } = useContext(ArticleContext);

  const getBoxeDeliverer = async (id: number): Promise<Boxe[]> => {
    try {
      const response = await axios.get(API_URL + `/boxes/allBoxes/${id}`);
      await Promise.all(
        response.data.map(async (boxe: Boxe) => {
          boxe.name = (await getArticle(boxe.item)).label;
        })
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching boxe:", error);
    }

    return [];
  };

  
  const exposedValue: BoxeContextProps = {
    getBoxeDeliverer,
  };

  return (
    <BoxeContext.Provider value={exposedValue}>{children}</BoxeContext.Provider>
  );
};

export { BoxeContext, BoxeContextProvider };
