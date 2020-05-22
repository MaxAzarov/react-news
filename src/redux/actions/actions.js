import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_FAILURE,
  APPLY_NEW_SETTINGS,
  SET_INPUT_SEARCH_TEXT,
  INCREASE_AMOUNT_OF_CARDS,
} from "./../actionsTypes/actionsTypes";

export function getNews(amount) {
  return async (dispatch) => {
    try {
      dispatch(SetLoading(false));
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      const chunk = data.slice(0, amount);
      dispatch(ReceivedData(chunk));
      dispatch(setInputSearchText(""));
    } catch (e) {
      console.log(e);
      dispatch(getError(e));
    }
  };
}

export const SetLoading = (value) => ({
  type: FETCH_DATA_START,
  payload: value,
});

export const ReceivedData = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const getError = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const ApplyNewSettings = (...args) => ({
  type: APPLY_NEW_SETTINGS,
  payload: args,
});

export function setInputSearchText(text) {
  return {
    type: SET_INPUT_SEARCH_TEXT,
    payload: text,
  };
}

export function amountOfCards() {
  return {
    type: INCREASE_AMOUNT_OF_CARDS,
  };
}
