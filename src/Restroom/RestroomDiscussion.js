import React, { Component } from "react";
import axios from "axios";
import RestroomCommentChain from "./RestroomCommentChain";
import { Card, CardSubtitle, CardTitle, CardBody } from "reactstrap";

export default class RestroomDiscussion extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  componentDidMount = () => {
    axios
      .get("/restrooms/comments/" + this.props.id + "/none")
      .then((response) => {
        this.setState({
          comments: response.data,
        });
      });
  };

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle tag="h5">Discussion Time.</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            There are {this.props.num_comments} comments on this restroom.{" "}
          </CardSubtitle>
          {this.state.comments.map((comment) => (
            <RestroomCommentChain
              key={comment._id}
              id={comment._id}
              username={comment.username}
              body={comment.body}
              num_likes={comment.num_likes}
            />
          ))}
        </CardBody>
      </Card>
    );
  }
}
