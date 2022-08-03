import axios from "./axios";

export function movieDATA() {
  return (dispatch) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch(apiData(response));
      });
  };
}
export function apiData(user) {
  return {
    type: "MOVIE_DATA",
    data: data,
  };
}
