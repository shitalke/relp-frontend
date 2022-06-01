import React, {Component} from 'react';

export default class RestroomInformation extends Component {
  render() {
    return(
      <>
        <h2>Information.</h2>
        <p>Handicap? {this.props.handicap ? 'YES' : 'NO'}</p>
        <p>Single Use? {this.props.single_use ? 'YES' : 'NO'}</p>
      </>
    );
  }
}
