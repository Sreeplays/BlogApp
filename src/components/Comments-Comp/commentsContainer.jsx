import React, { useEffect, useState } from "react";
import CommentsForm from "./commentsForm";
import { getCommentsData } from "../../data/comments";
import COMMENTS from "./COMMENTS";

const CommentsContainer = ({ className, loggedUserId }) => {
  const [comment, setComment] = useState([]);
  const mainComment = comment.filter((comments) => comments.parent == null);
  const [affectedComment, setaffectedComment] = useState(null);
  console.log(comment);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComment(commentData);
    })();
  }, []);

  const addComentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user_id: "a",
      username: "Mohammad Rezaii",
      des: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };
    setComment((currentState) => {
      return [newComment, ...currentState];
    });
    setaffectedComment(null)
  };
  const updateCommentHandler = (value, commentId) => {
    const updatedComment = comment.map((comments) => {
      if (comments._id === commentId) {
        return { ...comments, des: value };
      }
      return comments;
    });
    setComment(updatedComment);
    setaffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {
    const updatedComment = comment.filter((comments) => {
      return comments._id !== commentId;
    });
    setComment(updatedComment);
  };
  const getrepliesHandler = (commentId) => {
    return comment
      .filter((comments) => comments.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  return (
    <div className={"${className}"}>
      <CommentsForm
        btnLabel="Send"
        formSubmitHandler={(value) => addComentHandler(value)}
      />
      <div className="space-y-4 md:px-5 px-10 mt-5 mb-5">
        {mainComment.map((comment) => (
          <COMMENTS
            key={comment._id}
            comment={comment}
            loggedUserId={loggedUserId}
            affectedComment={affectedComment}
            setaffectedComment={setaffectedComment}
            addComment={addComentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies = {getrepliesHandler(comment._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
