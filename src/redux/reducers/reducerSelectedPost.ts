import {
  ACTION_SELECT_POST,
  FETCH_COMMENTS_LIST_SUCCESS,
  ACTION_SET_LIKE_COMMENT,
  ACTION_UNSET_LIKE_COMMENT
} from "../actions";
import { Utility } from "../../utils/Utility";

export const reducerSelectedPost = (prevState: any = {}, action: any) => {
  let clonedState = Utility.clone(prevState);

  switch (action.type) {
    case ACTION_SELECT_POST:
      clonedState.id = action.payload.id;
      break;
    case FETCH_COMMENTS_LIST_SUCCESS:
      clonedState.comments.list = action.payload.comments;
      clonedState.id = action.payload.idPost;
      break;
    case ACTION_SET_LIKE_COMMENT:
      clonedState.comments.likedIds = [
        ...clonedState.comments.likedIds,
        action.payload
      ];
      break;
    case ACTION_UNSET_LIKE_COMMENT:
      clonedState.comments.likedIds = clonedState.comments.likedIds.filter(
        (item: number) => item !== action.payload
      );
      break;
    default:
      break;
  }
  return clonedState;
};
