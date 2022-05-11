import React, {Component} from 'react';

const comments = [
  {
    user: "user0",
    comment: "yurp that was a mad shit i took"
  },
  {
    user: "user1",
    comment: "nah bruh im pissing my pants"
  },
  {
    user: "user3",
    comment: "TODO we are replacing this constant with a function call to the backend later"
  },
]
export default class RestroomDiscussion extends Component {
  render() {
    return(
      <>
        {comments.map(comment => <p>From {comment.user}: {comment.comment}</p>)}
      </>
    );
  }
}
