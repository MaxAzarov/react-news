export function getNews() {
  return async (dispatch) => {
    let response = await fetch(
      "https://newsapi.org/v2/sources?apiKey=d4d25c941a0f4f7592b7052402eba379"
    );
    const data = await response.json();
    const chunk = data.sources.slice(0, 10);
    dispatch(ReceivedData(chunk));
    console.log(data);
  };
}

export const postInfo = (datanews) => ({
  type: "NEWS_INFO",
  payload: datanews,
});

export const ReceivedData = (data) => ({
  type: "RECEIVE_NEWS",
  payload: data,
});

export const ApplyNewSettings = (...args) => ({
  type: "RECEIVED_NEW_SETTINGS",
  payload: args,
});
