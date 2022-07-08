import React, {Component} from "react";
import {Container, Col, Row} from "reactstrap";

// components
import Info from "../components/Info";

// TODO: connect to the backend. Either pass in through props or make the call here.
var fields = [
  "3 stalls",
  "wheelchair accessible",
  "2 hand dryers",
  "2 soap dispensers",
  "3 sinks",
  "mirror available"
];

export default class RestroomInformation extends Component {
  render() {
    // two columns, with hardcoded parameters for now.
    // TODO: using <p> is a little hacky, change it to real styling later
    return (
      <Container>
        <p />
        <Row xs="2">
          {fields.map(info => (
            <Col>
              <Info info={info} />
            </Col>
          ))}
        </Row>
        <p />
      </Container>
    );
  }
}
