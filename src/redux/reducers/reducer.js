import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_FAILURE,
  APPLY_NEW_SETTINGS,
  SET_INPUT_SEARCH_TEXT,
  INCREASE_AMOUNT_OF_CARDS,
} from "./../actionsTypes/actionsTypes";

const initialState = {
  data: [],
  loading: true,
  storySearch: true,
  TitleSearch: true,
  style: "default",
  newsInfo: [],
  amount: 20,
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
        amount,
        publications,
        periods,
        time,
        storySearch,
        TitleSearch,
        style,
      } = action.payload[0];
      return {
        ...state,
        amount,
        publications,
        periods,
        time,
        storySearch,
        TitleSearch,
        style,
      };

    case SET_INPUT_SEARCH_TEXT:
      return {
        ...state,
        data: [
          ...state.data2.filter(
            (item) =>
              (state.TitleSearch && item.title.includes(action.payload)) ||
              (state.storySearch && item.body.includes(action.payload))
          ),
        ],
        inputText: action.payload,
      };

    case INCREASE_AMOUNT_OF_CARDS:
      return {
        ...state,
        amount: state.amount + 20,
      };

    default:
      return state;
  }
};

export default reducer;
