import React, {Component} from 'react';
import axios from "axios";

export default class RestroomDiscussion extends Component {
  constructor(props) {
    super(props);
    this.state = {comments: []};
  }

  componentDidMount = () => {
    axios.get("/restrooms/comments/"+this.props.id+"/none").then(response => {
      this.setState({
        comments: response.data
      })
    })
  }

  render() {
    return(
      <>
        <h2>Discussion Time.</h2>
        <p>There are {this.props.num_comments} comments on this restroom. </p>
        {this.state.comments.map(comment => <p key={comment._id}>From {comment.username}: {comment.body}</p>)}
      </>
    );
  }
}
