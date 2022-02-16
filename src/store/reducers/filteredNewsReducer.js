import { SET_FILTERED_LIST } from "../actions/index";

function filteredNewsReducer(state = [], action) {
  switch (action.type) {
    case SET_FILTERED_LIST:
      return [...action.payload];
    case "clear_filtered_list":
      return [];
    default:
      return state;
  }
}

export { filteredNewsReducer };
