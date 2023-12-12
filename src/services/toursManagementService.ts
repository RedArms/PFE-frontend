import { Tour } from "../models/tour";
import API_URL from "../utils/config";
import axios from "axios";

async function getAllTours(): Promise<Tour[]> {
  console.log("fetching");

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
async function getTourByDelivererId(
  idDeliverer: number
): Promise<Tour | undefined> {
  const url: string = `${API_URL}/tours/getTourForDeliverer/${idDeliverer}`;

  console.log(`Fetching tour with id deliverer ${idDeliverer} at url ${url} :`);

  try {
    const response = await axios.get(url);
    const tourData: Tour = response.data;  
    return tourData;
  } catch (error) {
    console.log("Error fetching tours:", error);
    return undefined;
  }
}
export { getAllTours, getAllToursForToday, getTourByDelivererId };
