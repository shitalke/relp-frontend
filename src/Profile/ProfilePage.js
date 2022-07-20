import React, {Component} from "react";
import ProfileCard from "./ProfileCard";
import ProfileReviewList from "./ProfileReviewList";
import {Container} from "reactstrap";

// import axios from "axios";

// TODO: add state update once profile call is complete
var review_list = [
  "restroom_id0",
  "restroom_id1",
  "restroom_id2",
  "restroom_id3",
  "restroom_id4",
  "restroom_id5",
  "restroom_id6",
  "restroom_id7",
  "restroom_id8",
  "restroom_id9"
];

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: review_list
    };
  }

  // TODO: add profile call here
  componentDidMount = () => {};

  render() {
    return (
      <Container className="bg-light border text-center" fluid="sm">
        <ProfileCard />
        <ProfileReviewList reviews={this.state.reviews} />
      </Container>
    );
  }
}
