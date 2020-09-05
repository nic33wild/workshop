import React from "react";
import { useSelector } from "react-redux";
import { selectorComments } from "../../redux/selectors";

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
  return (
    <div
      style={{
        width: "500px",
        margin: "10px auto",
        padding: "10px",
        border: "solid 1px blue"
      }}
    >
      <small style={{ display: "block" }}>Name: {comment.name}</small>
      <small>Email: {comment.email}</small>
      <p>{comment.body}</p>
    </div>
  );
}
