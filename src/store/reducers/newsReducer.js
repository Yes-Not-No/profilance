import { newsList } from "../../data/news";
import { SET_NEWS_LIST } from "../actions/index";

const initialState =
  JSON.parse(localStorage.getItem("newslist")) || newsList || [];

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEWS_LIST:
      state.push(action.payload);
      return [...state];
    default:
      localStorage.setItem("newslist", JSON.stringify(state));
      return state;
  }
}

export { newsReducer };
