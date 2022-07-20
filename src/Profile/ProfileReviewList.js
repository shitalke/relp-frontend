import React, {Component} from "react";
// import axios from "axios";
import ProfileReviewCard from "./ProfileReviewCard";
import {Card, CardTitle, CardBody} from "reactstrap";

export default class ProfileReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO: not sure if we need to make calls here, depends on the backend
  componentDidMount = () => {};

  render() {
    return (
      <Card>
        <CardTitle> Your Past Reviews </CardTitle>
        <CardBody>
          {this.props.reviews.map(bathroom => (
            <ProfileReviewCard key={bathroom} id={bathroom} />
          ))}
        </CardBody>
      </Card>
    );
  }
}
