import { ItemWithQuantity } from "../models/Item";
import { Boxe } from "../models/boxe";
import API_URL from "../utils/config";
import axios from "axios";

async function getBoxForTours(id: number) {
  try {
    console.log("we go");
    console.log(id);

    const response = await axios.get(API_URL + `/boxes/allBoxes/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching boxe:", error);
  }

  return [];
}

async function getBoxForClientInAtour(
  idClient: number,
  idTour: number,
  date: string
): Promise<Boxe[] | undefined> {
  try {
    const url = `${API_URL}/clients/getAllBoxes/${idClient}/${idTour}/${date}`;
    console.log("getBoxForClientInAtour : " + url);
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching boxe:", error);
    return undefined;
  }
}

export { getBoxForTours  , getBoxForClientInAtour};
