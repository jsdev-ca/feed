import {
  FETCH_FEED_REQUEST,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAILURE
} from './actions';

const initialState = {
  error: null,
  feed: [],
  isFetching: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FEED_SUCCESS:
      return {
        ...state,
        feed: action.feed,
        isFetching: false
      };
    case FETCH_FEED_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case FETCH_FEED_REQUEST:
    default:
      return state;
  }
}
