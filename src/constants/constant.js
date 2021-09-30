import {Dimensions} from "react-native";
export const { width, height } = Dimensions.get('window');
export const IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
export const PNG = '.png'

export const GET_LATEST_VIDEOS = 'GET_LATEST_VIDEOS'
export const GET_LATEST_VIDEOS_REQUESTED = 'GET_LATEST_VIDEOS_REQUESTED'
export const ACCESS_TOKEN = //YOUR_ACCES_TOKEN YOUTUBE_API_V3

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
    API_KEY:'&key=//YOUR_API_KEY_FOR_YOUTUBE_API_V3',
}
