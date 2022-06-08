import React, {Component} from 'react';
import { Badge } from 'reactstrap';

export default class RestroomInformation extends Component {
  render() {
    return(
      <>
        {this.props.handicap ? <Badge color="primary m-2" pill>Handicap</Badge>:<></>}
        {this.props.single_use ? <Badge color="primary m-2" pill>Single Use</Badge>:<></>}
      </>
    );
  }
}
