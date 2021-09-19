import { all } from 'redux-saga/effects';
import { watchLogin, watchGetLatestVideos } from '../sagas/location';

function* rootSaga() {
    yield all([
        watchGetLatestVideos()
    ])
}

export default rootSaga