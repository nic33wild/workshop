import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorComments, selectorLikeCommentId } from "../../redux/selectors";
import {
  ACTION_SET_LIKE_COMMENT,
  ACTION_UNSET_LIKE_COMMENT
} from "../../redux/actions";

export const CommentsContainer = ({ postId }: any) => {
  const comments = useSelector(selectorComments);
  return <UICommentsList comments={comments} postId={postId} />;
};

export const UICommentsList = ({
  comments,
  postId
}: {
  comments: any;
  postId: number;
}) => (
  <>
    {comments.map((comment: any) =>
      comment.postId === postId ? <Comment comment={comment} /> : null
    )}
  </>
);

export function Comment({ comment }: any) {
  const dispatch = useDispatch();
  const commentsLiked = useSelector(selectorLikeCommentId);
  const setLikeComment = (id: number) => {
    dispatch({ type: ACTION_SET_LIKE_COMMENT, payload: id });
  };

  const removeLikeComment = (id: number) => {
    dispatch({ type: ACTION_UNSET_LIKE_COMMENT, payload: id });
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "10px auto",
        padding: "10px",
        border: "solid 1px blue",
        background: commentsLiked.includes(comment.id) ? "orange" : "none"
      }}
    >
      <small style={{ display: "block" }}>Name: {comment.name}</small>
      <small>Email: {comment.email}</small>
      <p>{comment.body}</p>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => setLikeComment(comment.id)}
      >
        LIKE COMMENT
      </button>
      <button onClick={() => removeLikeComment(comment.id)}>
        UNLIKE COMMENT
      </button>
    </div>
  );
}
