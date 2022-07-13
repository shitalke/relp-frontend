import React, {Component} from "react";
// import axios from "axios";
import LeaderboardCard from "./LeaderboardCard";
import {Card, Badge, CardBody} from "reactstrap";

const filters = ["Men", "Women", "Gender Neutral", "Single Use"];

export default class LeaderboardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO: not sure if we need to make calls here, depends on the backend
  componentDidMount = () => {};

  render() {
    return (
      <Card>
        <CardBody>
          {filters.map(filter => (
            <Badge color="primary" pill key={filter}>
              {filter}
            </Badge>
          ))}

          {this.props.ranking.map(bathroom => (
            <LeaderboardCard key={bathroom} id={bathroom} />
          ))}
        </CardBody>
      </Card>
    );
  }
}
