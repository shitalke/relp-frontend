import React, {Component} from "react";
import {Card, CardTitle, CardBody} from "reactstrap";

export default class LeaderboardCard extends Component {
  render() {
    return (
      <>
        <Card>
          <CardTitle>{this.props.id}</CardTitle>
          <CardBody>
            Imagine there is a picture to the left. There is some information
            about the restroom here, like its name, rank, and rating.
          </CardBody>
        </Card>
      </>
    );
  }
}
