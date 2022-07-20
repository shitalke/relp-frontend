import React, {Component} from "react";
import {Badge, Card, CardTitle, CardSubtitle, CardBody} from "reactstrap";

// TODO: add change Avatar popup functionality.
// TODO: add change password functionality.

export default class ProfileCard extends Component {
  render() {
    return (
      <>
        <Card>
          <CardTitle>ToiletPaperPro</CardTitle>
          <CardSubtitle>toilet@gmail.com</CardSubtitle>
          <CardBody>
            (Imagine there is a profile picture to the left.)
            <Badge color="primary" pill>
              Change Avatar
            </Badge>
            <Badge color="primary" pill>
              Change Password
            </Badge>
          </CardBody>
        </Card>
      </>
    );
  }
}
