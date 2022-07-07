/**
 * Reply component with input to reply to comment + make new comments
 *
 * Usage: used in the CommentThread component
 *
 */

import React, { useState } from "react";
import { ReplyContainer } from "./style";
import { LineContainer } from "../CommentThread/style";

// reply component -- used in CommentComponent
export default function Reply() {
  const [reply, setReply] = useState("");

  // TODO: make post request to backend when comment is submitted, and rerender
  const handleSubmit = (e) => {
    if (e.key == "Enter"){
      console.log("submitted");
    } 
  };

  return (
    <LineContainer reply>
      <ReplyContainer
        placeholder="Reply"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        onKeyDown={(e) => handleSubmit(e)}
      />
    </LineContainer>
  );
}
