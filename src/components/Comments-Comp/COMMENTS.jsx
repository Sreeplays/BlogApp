import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import images from "../../constants/images";
import CommentsForm from "./commentsForm";

const COMMENTS = ({
  comment,
  loggedUserId,
  affectedComment,
  setaffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies
}) => {
  const isUserLogged = Boolean(loggedUserId);
  const commentedUser = loggedUserId === comment.user_id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;
  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;
  const repliedParentId = parentId ? parentId : comment._id;
  const repliedUserId = comment.user_id;
  return (
    <div className="flex flex-wrap md:flex-nowrap items-start p-3 px-12 md:px-4 rounded-xl bg-[#F2F4F5] gap-x-2">
      <img
        src={images.userImage}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col">
        <h4 className="text-dark-hard text-xs md:text-sm font-semibold">
          {comment.username}
        </h4>
        <span className="text-xs text-dark-light italic">
          {new Date(comment.createdAt).toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
          })}
        </span>
        {!isEditing && (
          <p className="text-dark-light text-xs md:text-xm font-opensans font-light mt-2.5 mb-2.5">
            {comment.des}
          </p>
        )}

        {isEditing && (
          <CommentsForm
            btnLabel="Update"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setaffectedComment(null)}
            initialText={comment.des}
          />
        )}
        <div className="flex items-center gap-x-2 mt-3 mb-2 text-dark-light font-roboto font-light text-xm">
          {isUserLogged && (
            <button
              className="flex items-center space-x-1.5"
              onClick={() =>
                setaffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <FiMessageSquare className="w-3.5 h-auto" />
              <span>Reply</span>
            </button>
          )}
          {commentedUser && (
            <>
              <button
                className="flex items-center space-x-1.5"
                onClick={() =>
                  setaffectedComment({ type: "editing", _id: comment._id })
                }
              >
                <FaEdit className="w-3.5 h-auto" />
                <span>Edit</span>
              </button>
              <button
                className="flex items-center space-x-1.5"
                onClick={() => deleteComment(comment._id)}
              >
                <MdDeleteOutline className="w-3.5 h-auto" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentsForm
            btnLabel={"Submit"}
            formSubmitHandler={(value) =>
              addComment(value, repliedParentId, repliedUserId)
            }
            formCancelHandler={() => setaffectedComment(null)}
          />
        )}
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
                <COMMENTS
                  key={reply._id}
                  comment={reply}
                  loggedUserId={loggedUserId}
                  affectedComment={affectedComment}
                  setaffectedComment={setaffectedComment}
                  addComment={addComment}
                  deleteComment={deleteComment}
                  replies={[]}
                  updateComment={updateComment}
                  parentId={comment._id}
                />  
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default COMMENTS;
