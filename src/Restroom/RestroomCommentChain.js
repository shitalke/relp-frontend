import React, {Component} from 'react';
import axios from "axios";
import { CardText } from 'reactstrap';

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
        <CardText>From {this.props.username}: {this.props.body}</CardText>
        {this.state.replies.map(comment => <CardText key={comment._id}>In response {this.props.username}, {comment.username} says: {comment.body}</CardText>)}
      </>
    );
  }
}
