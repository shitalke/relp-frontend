import React, {Component} from 'react';
import axios from "axios";

export default class RestroomCommentChain extends Component {
  constructor(props) {
    super(props);
    this.state = {replies: []};
  }

  componentDidMount = () => {
    axios.get("/restrooms/replies/"+this.props.id).then(response => {
      console.log(response.data)
      this.setState({
        replies: response.data
      })
    })
  }

  render() {
    return(
      <>
        <p>From {this.props.username}: {this.props.body}</p>
        {this.state.replies.map(comment => <p key={comment._id}>In response {this.props.username}, {comment.username} says: {comment.body}</p>)}
      </>
    );
  }
}
