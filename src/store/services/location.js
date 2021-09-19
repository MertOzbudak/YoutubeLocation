import * as constants from '../../constants/constant';
import { getAccurateDate } from '../../utils/helper'

const getLatestVideosByLocationFromAPI = async(lat, long, nextPageToken) =>{
    try{

        let response = await fetch(
            constants.serviceURL.BASE_URL 
            + constants.urlParams.PART 
            + constants.urlParams.TYPE 
            + constants.urlParams.PUBLISHED_AFTER + getAccurateDate()
            + constants.urlParams.MAX_RESULT 
            + constants.urlParams.PAGE_TOKEN + nextPageToken
            + constants.urlParams.LOCATION + lat + "%2C" + long
            + constants.urlParams.LOCATION_RADIUS
            + constants.urlParams.API_KEY, 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': constants.ACCESS_TOKEN
                }
            }
        );

       response = await response.json()
       
       return response
    
    }catch(error){
        console.log("GET LATEST VIDEO SERVICE ERROR:", error);
        throw error;
    }
}

export default {
    getLatestVideosByLocationFromAPI
};