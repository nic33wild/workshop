import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorComments, selectorLikeCommentId } from "../../redux/selectors";
import {
  ACTION_SET_LIKE_COMMENT,
  ACTION_UNSET_LIKE_COMMENT,
} from "../../redux/actions";

export const CommentsContainer = ({ postId }: any) => {
  const comments = useSelector(selectorComments);
  return <UICommentsList comments={comments} postId={postId} />;
};

export const UICommentsList = ({
  comments,
  postId,
}: {
  comments: any;
  postId: number;
}) => (
  <>
    {comments.map((comment: any) =>
      comment.postId === postId ? <CommentContainer comment={comment} /> : null
    )}
  </>
);

export const CommentContainer = ({ comment }: any) => {
  const dispatch = useDispatch();

  const commentsLiked = useSelector(selectorLikeCommentId);

  const setLikeComment = () => {
    dispatch({ type: ACTION_SET_LIKE_COMMENT, payload: comment.id });
  };

  const removeLikeComment = () => {
    dispatch({ type: ACTION_UNSET_LIKE_COMMENT, payload: comment.id });
  };

  return (
    <UIComment
      comment={comment}
      setLikeComment={setLikeComment}
      removeLikeComment={removeLikeComment}
      isLiked={commentsLiked.includes(comment.id)}
    />
  );
};

export function UIComment({
  comment,
  setLikeComment,
  removeLikeComment,
  isLiked,
}: any) {
  return (
    <div
      style={{
        width: "500px",
        margin: "10px auto",
        padding: "10px",
        border: "solid 1px blue",
        background: isLiked ? "orange" : "none",
      }}
    >
      <small style={{ display: "block" }}>Name: {comment.name}</small>
      <small>Email: {comment.email}</small>
      <p>{comment.body}</p>
      <button style={{ marginRight: "10px" }} onClick={setLikeComment}>
        LIKE COMMENT
      </button>
      <button onClick={removeLikeComment}>UNLIKE COMMENT</button>
    </div>
  );
}
