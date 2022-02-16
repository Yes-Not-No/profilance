import { initialState } from "../initialState";
import { AUTHORIZE_ACTION, UNAUTHORIZE_ACTION } from "../actions/index";

function authReducer(
  state = JSON.parse(localStorage.getItem("user")) || initialState,
  action
) {
  switch (action.type) {
    case AUTHORIZE_ACTION:
      return {
        ...action.payload,
        isAuthorize: true,
      };
    case UNAUTHORIZE_ACTION:
      return {
        isAuthorize: action.payload,
      };
    default:
      return state;
  }
}

export { authReducer };
