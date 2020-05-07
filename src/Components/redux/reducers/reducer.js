const initialState = {
  data: [],
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
    case "GET_NEWS":
      return { ...state };
    case "RECEIVE_NEWS":
      return {
        ...state,
        data: action.payload,
      };

    case "NEWS_INFO":
      if (action.payload.length > 0) {
        return {
          ...state,
          newsInfo: action.payload,
        };
      } else {
        return { ...state };
      }

    case "RECEIVED_NEW_SETTINGS":
      console.log(action.payload);
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

    default:
      return state;
  }
};

export default reducer;
