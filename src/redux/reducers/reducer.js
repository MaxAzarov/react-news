import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_FAILURE,
  APPLY_NEW_SETTINGS,
  SET_INPUT_SEARCH_TEXT,
} from "./../actionsTypes/actionsTypes";

const initialState = {
  data: [],
  loading: true,
  Currentamount: "10",
  publications: "Stories",
  periods: "Most recent",
  time: "Forever",
  storySearch: false,
  AuthorSearch: false,
  style: "default",
  newsInfo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data2: action.payload,
      };

    case FETCH_DATA_START:
      return {
        ...state,
        loading: action.payload,
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        failure: action.payload,
      };

    case APPLY_NEW_SETTINGS:
      const {
        Currentamount,
        publications,
        periods,
        time,
        storySearch,
        AuthorSearch,
        style,
      } = action.payload[0];
      return {
        ...state,
        Currentamount,
        publications,
        periods,
        time,
        storySearch,
        AuthorSearch,
        style,
      };

    case SET_INPUT_SEARCH_TEXT:
      return {
        ...state,
        data: [
          ...state.data2.filter((item) => item.title.includes(action.payload)),
        ],
        inputText: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
