import {Dimensions} from "react-native";
export const { width, height } = Dimensions.get('window');
export const IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
export const PNG = '.png'

export const GET_LATEST_VIDEOS = 'GET_LATEST_VIDEOS'
export const GET_LATEST_VIDEOS_REQUESTED = 'GET_LATEST_VIDEOS_REQUESTED'
export const ACCESS_TOKEN = 'ya29.a0ARrdaM_RTs4H7KTpwriLpKefsZZrrURV3D0wbbDvDS2AvTHY7y5VHciTwe2oUu4dytAoFOWgUZA2ILayUyKX90ozuiSnZ5C8pVRcyrQ2GGJjagIu0RkZ0lEDN5LeX7BTt7h5qE2hqZ5mRmpxx7yt5TRB_bGj'
//'ya29.a0ARrdaM8vXL7uGyDOXKGZ345vsieIu7N8tFCFrW-G0iddgWhhxQM4uCsjducm9Cr9ET4orrwqF5RLD-wjpDVItlowuqNFM5O1QbzksScJTUut4JxEiYN-yCnt2pMKm4m_YOopEaHqpBUkq4RGIEyaNtJYPv7MKg'

export const serviceURL = {
    BASE_URL:'https://youtube.googleapis.com/youtube/v3/search?',
}

export const urlParams = {
    PART:'part=snippet',
    LOCATION:"&location=",
    LOCATION_RADIUS:'&locationRadius=10mi',
    PUBLISHED_AFTER:'&publishedAfter=',
    TYPE:'&type=video',
    PAGE_TOKEN:'&pageToken=',
    MAX_RESULT:'&maxResults=10',
    API_KEY:'&key=AIzaSyBjWXTMXWGXlwQg1bFhBuVO1Cv1lx628Nk',
    //'&key=AIzaSyBVA7mLBPrHfZznDxSo38wehklxxNU9kv0',
}