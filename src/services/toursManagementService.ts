import { Tour } from "../models/tour";
import API_URL from "../utils/config";
import axios from "axios";

async function getAllTours(): Promise<Tour[]> {
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

export { getAllTours };