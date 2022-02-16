const AUTHORIZE_ACTION = "authorize";
const UNAUTHORIZE_ACTION = "unauthorize";
const SET_NEWS_LIST = "setNewsList";
const SET_FILTERED_LIST = "setFilteredList";

function auth(object) {
  return {
    type: AUTHORIZE_ACTION,
    payload: object,
  };
}

function unauth() {
  return {
    type: UNAUTHORIZE_ACTION,
    payload: false,
  };
}

function setNewsList(news) {
  return {
    type: SET_NEWS_LIST,
    payload: news,
  };
}

function setFilteredList(news) {
  return {
    type: SET_FILTERED_LIST,
    payload: news,
  };
}

export {
  auth,
  unauth,
  setNewsList,
  setFilteredList,
  SET_NEWS_LIST,
  AUTHORIZE_ACTION,
  UNAUTHORIZE_ACTION,
  SET_FILTERED_LIST,
};
