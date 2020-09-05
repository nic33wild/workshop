import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorPosts,
  selectorSelectedPostId,
  selectorLikePostId
} from "../../redux/selectors";
import {
  FETCH_POSTS_LIST_REQUEST,
  FETCH_COMMENTS_LIST_REQUEST,
  ACTION_SET_LIKE_POST,
  ACTION_UNSET_LIKE_POST
} from "../../redux/actions";
import { CommentsContainer } from "../CommentsContainer";

export const ListPost: FC = (): JSX.Element => {
  const postList = useSelector(selectorPosts);
  const selectedPostId: any = useSelector(selectorSelectedPostId);
  const arraySelectedLikePostId: any = useSelector(selectorLikePostId);
  const dispatch = useDispatch();

  const getComments = (id: number) => {
    dispatch({ type: FETCH_COMMENTS_LIST_REQUEST, payload: id });
  };

  const removeLikePost = (id: number) => {
    dispatch({ type: ACTION_UNSET_LIKE_POST, payload: id });
  };

  const setLikePost = (id: number) => {
    dispatch({ type: ACTION_SET_LIKE_POST, payload: id });
  };

  // useEffect(() => {
  //   dispatch({ type: ACTION_SET_LIKE_POST, payload: selectedPostId });
  // }, [selectedPostId]);

  useEffect(() => {
    dispatch({
      type: FETCH_POSTS_LIST_REQUEST
    });
  }, []);

  return (
    <>
      {postList.map((post: any) => (
        <>
          <div
            style={{
              border: post.id === selectedPostId ? "1px solid red" : "none",
              background: arraySelectedLikePostId.includes(post.id)
                ? "yellow"
                : "none",
              padding: "10px",
              margin: "10px auto",
              width: "500px"
            }}
            onClick={() => getComments(post.id)}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <button
              onClick={e => {
                e.preventDefault();
                removeLikePost(post.id);
              }}
            >
              TOGLI IL POST DAI PREFERITI
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                setLikePost(post.id);
              }}
            >
              AGGIUNGI IL POST AI PREFERITI
            </button>
          </div>
          <CommentsContainer postId={post.id} />
        </>
      ))}
    </>
  );
};
