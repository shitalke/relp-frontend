import React, {Component} from "react";
import LeaderboardTitle from "./LeaderboardTitle";
import LeaderboardDescription from "./LeaderboardDescription";
import LeaderboardList from "./LeaderboardList";
import {Container} from "reactstrap";

// import axios from "axios";

// TODO: add state update once leaderboard call is complete
var leaderboard_list = [
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

export default class LeaderboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: leaderboard_list
    };
  }

  // TODO: add leaderboard call here
  componentDidMount = () => {};

  render() {
    return (
      <Container className="bg-light border text-center" fluid="sm">
        <LeaderboardTitle />
        <LeaderboardDescription />
        <LeaderboardList ranking={this.state.ranking} />
      </Container>
    );
  }
}
