import { Utility } from "../../utils/Utility";
import {
  FETCH_POSTS_LIST_REQUEST,
  FETCH_POSTS_LIST_SUCCESS,
  FETCH_POSTS_LIST_FAILURE,
  FETCH_COMMENTS_LIST_SUCCESS,
  FETCH_COMMENTS_LIST_FAILURE,
  FETCH_COMMENTS_LIST_REQUEST,
} from "../actions";

export const reducerIsFetching = (prevState: any = {}, action: any) => {
  let clonedState = Utility.clone(prevState);

  switch (action.type) {
    case FETCH_POSTS_LIST_REQUEST:
      clonedState.posts = true;
      break;
    case FETCH_COMMENTS_LIST_REQUEST:
      clonedState.comments = true;
      break;
    case FETCH_POSTS_LIST_SUCCESS:
    case FETCH_POSTS_LIST_FAILURE:
      delete clonedState.posts;
      break;
    case FETCH_COMMENTS_LIST_SUCCESS:
    case FETCH_COMMENTS_LIST_FAILURE:
      delete clonedState.comments;
      break;
    default:
      break;
  }
  return clonedState;
};
