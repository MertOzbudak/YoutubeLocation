import * as constants from '../../constants/constant'

const initialState = {
    latestvideos: [],
    nextToken: '',
    length: 0,
    hasError:false,
    errorMsg:''
}

export default (state = initialState, action) =>{
    const { type, payload, page } = action
    switch (type){
        case constants.GET_LATEST_VIDEOS: {
            return {
                ...state,
                latestvideos: page == 1 ? payload.items.map(item=>item.snippet) : [...state.latestvideos, ...payload.items.map(item=>item.snippet)],
                nextToken: payload.nextPageToken,
                length: payload.pageInfo.totalResults,
                hasError: false,
                errorMsg: state.errorMsg
            } 
        }
        case 'GET_LATEST_VIDEOS_ERROR': {
            return {
                ...state,
                latestvideos: state.latestvideos,
                nextToken: state.nextToken,
                length: state.length,
                hasError: true,
                errorMsg: payload.errorMsg
            } 
        }
        default:
            return state;
    }
}