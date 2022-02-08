import React, { useState } from "react";
import { useSelector } from "react-redux";
import Like from "./Like";
import { isEmpty } from "./Utils";


const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const user = useSelector((state) => state.userReducer)

  return (
    <div className="post">
      {!isEmpty(user[0]) && user[0].pseudo === post.author && (
        <div className="edit-delete">
          <img onClick={() => setEditToggle(!editToggle)} src="./icons/edit.svg" alt="edit"/>
          <img src="./icons/delete.svg" alt="delete"/>
        </div>
      )}
      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {editToggle ? (
        <form>
          <textarea defaultValue={post.content}></textarea>
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
      <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
