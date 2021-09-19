import * as constants from '../../constants/constant'
import service from '../services/location';
import { isStringEmpty } from '../../utils/helper';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export function* getLatestVideosByLocation(action) {
    try {

       const response = yield call(service.getLatestVideosByLocationFromAPI, action.lat, action.long, isStringEmpty(action.nextPageToken) ? '' : action.nextPageToken);
       yield put({type: constants.GET_LATEST_VIDEOS, payload: response, page: action.page}) 

    } catch (e) {
        console.log("ERROR AT ACTION FOLDER", e)
    }
 }


 export function* watchGetLatestVideos() {
    yield takeLatest(constants.GET_LATEST_VIDEOS_REQUESTED, getLatestVideosByLocation);
}
 
