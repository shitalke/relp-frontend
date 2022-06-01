import React, {Component} from 'react';
import axios from "axios";

export default class RestroomDiscussion extends Component {
  constructor(props) {
    super(props);
    this.state = {comments: []};
  }

  componentDidMount = () => {
    axios.get("/restrooms/comments/6297e0e2a3380b5be5b7139f/none").then(response => {
      this.setState({
        comments: response.data
      })
    })
  }

  render() {
    return(
      <>
        {this.state.comments.map(comment => <p key={comment._id}>From {comment.username}: {comment.body}</p>)}
      </>
    );
  }
}
