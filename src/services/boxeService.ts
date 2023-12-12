import { Tour } from "../models/tour";
import API_URL from "../utils/config";
import axios from "axios";


async function getBoxForTours (id : number ){
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

export {getBoxForTours}