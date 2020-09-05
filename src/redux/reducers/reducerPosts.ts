import { Utility } from "../../utils/Utility";
import {
  FETCH_POSTS_LIST_SUCCESS,
  ACTION_SET_LIKE_POST,
  ACTION_UNSET_LIKE_POST
} from "../actions";

export const reducerPosts = (prevState: any = {}, action: any) => {
  const clonedState = Utility.clone(prevState);

  switch (action.type) {
    case FETCH_POSTS_LIST_SUCCESS:
      clonedState.list = action.payload;
      break;
    case ACTION_SET_LIKE_POST:
      clonedState.likedIds = [...clonedState.likedIds, action.payload];
      break;
    case ACTION_UNSET_LIKE_POST:
      clonedState.likedIds = clonedState.likedIds.filter(
        (item: number) => item !== action.payload
      );
      break;
    default:
      break;
  }
  return clonedState;
};
