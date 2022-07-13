import React, {useState, useEffect} from "react";
import axios from "axios";

// components
import Reply from "../components/Reply";
import CommentThread from "../components/CommentThread";

export default function RestroomCommentChain(props) {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    axios.get("/restrooms/replies/" + props.id).then(response => {
      setReplies(response.data);
    });
  }, [props.id]);

  return (
    <>
      <CommentThread
        username={props.username}
        likes={props.num_likes}
        comment={props.body}
        rating={4}
      />
      {replies.map(comment => {
        return (
          <CommentThread
            key={comment._id}
            username={comment.username}
            comment={comment.body}
            likes={comment.num_likes}
            reply
          />
        );
      })}
      <Reply />
    </>
  );
}
