import { Tour } from "../models/tour";
import API_URL from "../utils/config";
import axios from "axios";

async function getAllTours(): Promise<Tour[]> {
  console.log('fetching');
  
  try {
    const response = await axios.get(`${API_URL}/tours/`);

    if (response.status !== 200) {
      return [];
    }
    const tours = response.data;

    return tours;
  } catch (error) {
    console.log("Une erreur s'est produite :", error);

    return [];
  }
}

async function getAllToursForToday(): Promise<Tour[]> {
  console.log("test");
  
  try {
    const response = await axios.get(API_URL + "/tours/getAllNotDelivered");
    const tourData: Tour[] = response.data;
    console.log(tourData);
    return tourData;
      
  } catch (error) {
    console.error("Error fetching tours:", error);
    return [];
  }
}

export { getAllTours,getAllToursForToday};